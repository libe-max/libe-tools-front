import { connect } from 'react-redux'
import { state2props, dispatch2props } from './connected'

import React, { Component } from 'react'
import Header from '../../blocks/Header'
import NotificationsPanel from '../../blocks/NotificationsPanel'
import BundleSaver from '../../blocks/BundleSaver'
import ShadowBar from '../../../components/boxes/ShadowBar'
import BlockTitle from '../../../components/text-levels/BlockTitle'
import Paragraph from '../../../components/text-levels/Paragraph'
import TextInput from '../../../components/inputs/TextInput'
import Button from '../../../components/buttons/Button'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'
import Wrapper from './style'

import { list as toolsList } from '../../../_config/tools'
import { Bundle } from '../../../_config/bundles'

class BundlePage extends Component {
  constructor (props) {
    super(props)
    this.populateFields = this.populateFields.bind(this)

    /* Get the unsaved bundle from store
     * if none is found, fetch it from the database */
    const id = props.match.params.id
    const unsavedBundle = props.getUnsavedBundle(id)
    if (!unsavedBundle) {
      props.fetchBundle(id)
        .then(res => {
          if (this.node) {
            this.setState({
              loading: false,
              bundle: new Bundle(res)
            })
          }
        })
    }

    /* Get the appropriate tool for the bundle to edit */
    const type = props.match.params.type
    let rightTool = {}
    const toolExists = toolsList.some(tool => {
      const toolMatches = tool.type === type
      if (toolMatches) rightTool = tool
      return toolMatches
    })
    if (!toolExists) {
      props.notify(
        `Aucun outil trouvé pour éditer les ` +
        `modules de ce type : ${type}`,
        'error'
      )
      props.goHome()
    }

    /* Init page state */
    this.state = {
      type,
      loading: unsavedBundle ? false : true,
      tool: rightTool,
      bundle: unsavedBundle || {},
    }
  }

  static getDerivedStateFromProps (props, state) {
    const id = props.match.params.id
    const unsavedBundle = props.getUnsavedBundle(id)
    if (unsavedBundle) {
      return Object.assign({}, state, {
        bundle: unsavedBundle
      })
    }
    return state
  }

  componentDidMount () {
    this.populateFields()
  }

  componentDidUpdate () {
    this.populateFields()
  }

  populateFields () {
    const state = this.state
    this.bundleAuthorInput.input.value = state.bundle.author || ''
  }

  render () {
    const props = this.props
    const state = this.state

    const BundleDisplayer = state.tool.display || (props => <div></div>)
    const BundleCustomSettings = state.tool.settings || (props => <div></div>)
    const BundleActions = state.tool.actions || (props => <div></div>)

    /* Assign classes to component */
    const classes = ['bundle-page']
    if (state.loading) classes.push('bundle-page_fetching-bundle')
    if (state.tool.display) classes.push('bundle-page_with-display')
    if (state.tool.settings) classes.push('bundle-page_with-custom-settings')

    /* Display */
    return <Wrapper
      innerRef={node => { this.node = node }}
      className={classes.join(' ')}>
      <div className='bundle-page__header'><Header /></div>
      <div className='bundle-page__content'>
        <div className='bundle-page__notifications'><NotificationsPanel /></div>
        <div className='bundle-page__bundle-preview-box'>
          <div className='bundle-page__bundle-preview-box-slider'>
            <div className='bundle-page__bundle-display'>
              <BundleDisplayer bundle={state.bundle} />
            </div>
            <div className='bundle-page__no-bundle-display'>
              <Paragraph italic light>Aucune prévisualisation du module disponible.</Paragraph>
            </div>
          </div>
        </div>
        <ThemeProvider theme={theme._shade}>
          <div className='bundle-page__bundle-settings-box'>
            <div className='bundle-page__bundle-settings-box-slider'>
              <div className='bundle-page__bundle-general-settings'>
                <BlockTitle level={2}>Paramètres généraux</BlockTitle>
                <TextInput
                  label='Titre'
                  placeholder='Donnez un titre à ce module'
                  onChange={e => props.dispatchCustomSetting(e, 'name')}
                  onBlur={e => props.dispatchCustomSetting(e, 'name')}
                  ref={node => { this.bundleTitleInput = node }} />
                <TextInput
                  label='Auteur'
                  placeholder='Votre nom'
                  onChange={e => props.dispatchGeneralSetting(e, 'author')}
                  onBlur={e => props.dispatchGeneralSetting(e, 'author')}
                  ref={node => { this.bundleAuthorInput = node }} />
              </div>
              <div className='bundle-page__bundle-custom-settings'>
                <BlockTitle level={2}>Paramètres du module</BlockTitle>
                <BundleCustomSettings id={state.bundle._id} />
              </div>
            </div>
          </div>
        </ThemeProvider>
        <div className='bundle-page__fetching-bundle-loader'>
          <img src='/images/loader.gif' alt='Loader' />
        </div>
      </div>
      <div className='bundle-page__status-bar'>
        <ShadowBar>
          <div className='bundle-page__actions'>
            <Button link minor onClick={props.goHome}>‹ Retour</Button>
            <BundleActions id={state.bundle._id} />
            <BundleSaver id={state.bundle._id} />
          </div>
        </ShadowBar>
      </div>
    </Wrapper>
  }
}

export default connect(
  state2props,
  dispatch2props
)(BundlePage)

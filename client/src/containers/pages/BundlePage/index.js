import { connect } from 'react-redux'
import { state2props, dispatch2props } from './connected'

import React, { Component } from 'react'
import moment from 'moment'
import Header from '../../blocks/Header'
import NotificationsPanel from '../../blocks/NotificationsPanel'
import ShadowBar from '../../../components/boxes/ShadowBar'
import BlockTitle from '../../../components/text-levels/BlockTitle'
import Paragraph from '../../../components/text-levels/Paragraph'
import TextInput from '../../../components/inputs/TextInput'
import Button from '../../../components/buttons/Button'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'
import Wrapper from './style'

import { getBundleCurrentSettings, getBundleLastSaveDate } from '../../../_config/bundles'

class BundlePage extends Component {
  constructor (props) {
    super(props)
    this.state = { loading: true }
    this.settingsComponents = {}
    this.populateFields = this.populateFields.bind(this)
    this.getSettingsVersions = this.getSettingsVersions.bind(this)
    props.getSavedBundle().finally(bundle => {
      if (this.node) this.setState({ loading: false })
    })
  }

  componentDidUpdate () {
    this.populateFields()
  }

  getSettingsVersions () {
    const props = this.props
    const storedBundle = props.bundle
    const storedSettings = getBundleCurrentSettings(storedBundle)
    const unsavedSettings = props.changes ?
      Object.assign({}, storedSettings, {...props.changes}) :
      undefined
    if (unsavedSettings) {
      delete unsavedSettings._id
      delete unsavedSettings.timestamp
    }
    const displaySettings = unsavedSettings || storedSettings
    return { storedBundle, storedSettings, unsavedSettings, displaySettings }
  }

  populateFields () {
    const { displaySettings } = this.getSettingsVersions()
    const { name, author } = this.settingsComponents
    const makeString = val => {
      if (val === undefined) return ''
      return val
    }
    name.input.value = makeString(displaySettings.name)
    author.input.value = makeString(displaySettings.author)
  }

  render () {
    const props = this.props
    const state = this.state

    /* Inner logic */
    const { storedBundle, unsavedSettings, displaySettings } = this.getSettingsVersions()
    const lastSaveMillis = getBundleLastSaveDate(storedBundle)
    const lastSavedOn = moment(lastSaveMillis, 'x').format('DD MMM YYYY à HH:mm:ss')
    const lastSavedAgo = moment(lastSaveMillis, 'x').fromNow()
    const BundleDisplayer = props.tool.display || (props => <div></div>)
    const BundleCustomSettings = props.tool.settings || (props => <div></div>)
    const BundleActions = props.tool.actions || (props => <div></div>)

    /* Assign classes to component */
    const classes = ['bundle-page']
    if (state.loading) classes.push('bundle-page_fetching-bundle')
    if (props.changes) classes.push('bundle-page_unsaved-bundle')
    if (props.tool.display) classes.push('bundle-page_with-display')
    if (props.tool.settings) classes.push('bundle-page_with-custom-settings')

    /* Display */
    return <Wrapper innerRef={node => { this.node = node }} className={classes.join(' ')}>
      <div className='bundle-page__header'><Header /></div>
      <div className='bundle-page__content'>
        <div className='bundle-page__notifications'><NotificationsPanel /></div>
        <div className='bundle-page__bundle-preview-box'>
          <div className='bundle-page__bundle-preview-box-slider'>
            <div className='bundle-page__bundle-display'>
              <BundleDisplayer bundle={storedBundle} />
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
                  defaultValue={displaySettings.name}
                  onChange={e => props.dispatchEdition(e, 'name')}
                  ref={node => { this.settingsComponents.name = node }} />
                <TextInput
                  label='Auteur'
                  placeholder='Votre nom'
                  defaultValue={displaySettings.author}
                  onChange={e => props.dispatchEdition(e, 'author')}
                  ref={node => { this.settingsComponents.author = node }} />
              </div>
              <div className='bundle-page__bundle-custom-settings'>
                <BlockTitle level={2}>Paramètres du module</BlockTitle>
                <BundleCustomSettings id={storedBundle._id} />
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
            <BundleActions id={storedBundle._id} />
            <div className='bundle-page__saved-paragraph'>
              <Paragraph light small>
                Module sauvegardé (dernière modif. : <span title={lastSavedOn}>{lastSavedAgo}</span>)
              </Paragraph>
            </div>
            <div className='bundle-page__save-button'>
              <Button onClick={e => props.saveChanges(unsavedSettings)} primary>Enregistrer</Button>
            </div>
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

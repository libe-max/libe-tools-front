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

import { getBundleCurrentSettings, getBundleLastSaveDate } from '../../../utils/bundles'

class BundlePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      bundle: undefined
    }
    this.settingsComponents = {}
    this.populateFields = this.populateFields.bind(this)
    this.getSettingsVersions = this.getSettingsVersions.bind(this)
    props.getSavedBundle().finally(() => {
      if (this.node) this.setState({ loading: false })
    })
  }

  componentDidUpdate () {
    const props = this.props
    const state = this.state
    const expectedType = props.match.params.type
    const actualType = props.bundle.type
    const typesDiffer = actualType !== expectedType
    if (!state.loading && typesDiffer) return props.goHome()
    this.populateFields()
  }

  populateFields () {
    const { latestSettings } = this.getSettingsVersions()
    const { name, author } = this.settingsComponents
    const makeString = val => {
      if (val === undefined) return ''
      return val
    }
    name.input.value = makeString(latestSettings.name)
    author.input.value = makeString(latestSettings.author)
  }

  getSettingsVersions () {
    const props = this.props
    const storedBundle = props.bundle
    const storedSettings = getBundleCurrentSettings(storedBundle)
    const storedSettingsHistory = storedBundle.settings_history || []
    const unsavedSettings = props.changes
      ? Object.assign({}, storedSettings, { ...props.changes })
      : undefined
    if (unsavedSettings) {
      delete unsavedSettings._id
      unsavedSettings.timestamp = moment().valueOf()
    }
    const unsavedBundle = props.changes
      ? {
        ...storedBundle,
        settings_history: [...storedSettingsHistory, unsavedSettings]
      }
      : undefined
    const latestSettings = unsavedSettings || storedSettings
    const latestBundle = unsavedBundle || storedBundle
    const isSaving = unsavedSettings && unsavedSettings._saving
    return {
      storedBundle,
      storedSettings,
      unsavedBundle,
      unsavedSettings,
      latestBundle,
      latestSettings,
      isSaving
    }
  }

  render () {
    const props = this.props
    const state = this.state

    /* Inner logic */
    const {
      storedBundle,
      storedSettings,
      unsavedSettings,
      latestSettings,
      isSaving
    } = this.getSettingsVersions()
    const lastSaveMillis = getBundleLastSaveDate(storedBundle)
    const lastSavedOn = moment(lastSaveMillis, 'x').format('DD MMM YYYY à HH:mm:ss')
    const lastSavedAgo = moment(lastSaveMillis, 'x').fromNow()
    const loading = state.loading
    const BundleDisplayer = props.tool.display || (props => <div />)
    const BundleCustomSettings = props.tool.settings || (props => <div />)
    const BundleActions = props.tool.actions || (props => <div />)
    const isSaved = (props => {
      if (!storedBundle._id) return false
      if (loading) return false
      if (isSaving) return false
      if (unsavedSettings) return false
      return true
    })(props)

    /* Assign classes to component */
    const classes = ['bundle-page']
    if (state.loading) classes.push('bundle-page_fetching-bundle')
    if (props.changes) classes.push('bundle-page_unsaved-bundle')
    if (props.tool.display) classes.push('bundle-page_with-display')
    if (props.tool.settings) classes.push('bundle-page_with-custom-settings')
    if (isSaving) classes.push('bundle-page_saving')
    if (isSaved) classes.push('bundle-page_saved')

    /* Display */
    return <Wrapper innerRef={node => { this.node = node }} className={classes.join(' ')}>
      <div className='bundle-page__header'><Header /></div>
      <div className='bundle-page__content'>
        <div className='bundle-page__notifications'><NotificationsPanel /></div>
        <div className='bundle-page__bundle-preview-box'>
          <div className='bundle-page__bundle-display'>
            <BundleDisplayer
              id={storedBundle._id}
              isSaving={isSaving}
              loading={loading}
              storedSettings={storedSettings}
              unsavedSettings={unsavedSettings}
              latestSettings={latestSettings}
              dispatchEdition={props.dispatchEdition}
              pushNotification={props.pushNotification} />
          </div>
          <div className='bundle-page__no-bundle-display'>
            <Paragraph italic light>Aucune prévisualisation du module disponible.</Paragraph>
          </div>
        </div>
        <ThemeProvider theme={theme._shade}>
          <div className='bundle-page__bundle-settings-box'>
            <div className='bundle-page__bundle-settings-box-slider'>
              <div className='bundle-page__bundle-general-settings'>
                <BlockTitle level={2}>Paramètres généraux</BlockTitle>
                <ul>
                  <li>
                    <TextInput
                      label='Titre'
                      placeholder='Donnez un titre à ce module'
                      defaultValue={latestSettings.name}
                      onChange={e => props.dispatchEdition('name', e.target.value)}
                      ref={node => { this.settingsComponents.name = node }} />
                  </li>
                  <li>
                    <TextInput
                      label='Auteur'
                      placeholder='Votre nom'
                      defaultValue={latestSettings.author}
                      onChange={e => props.dispatchEdition('author', e.target.value)}
                      ref={node => { this.settingsComponents.author = node }} />
                  </li>
                </ul>
              </div>
              <div className='bundle-page__bundle-custom-settings'>
                <BlockTitle level={2}>Paramètres du module</BlockTitle>
                <BundleCustomSettings
                  id={storedBundle._id}
                  isSaving={isSaving}
                  loading={loading}
                  storedSettings={storedSettings}
                  unsavedSettings={unsavedSettings}
                  latestSettings={latestSettings}
                  dispatchEdition={props.dispatchEdition}
                  pushNotification={props.pushNotification} />
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
            <div className='bundle-page__custom-actions'>
              <BundleActions
                id={storedBundle._id}
                isSaving={isSaving}
                loading={loading}
                storedSettings={storedSettings}
                unsavedSettings={unsavedSettings}
                latestSettings={latestSettings}
                dispatchEdition={props.dispatchEdition}
                pushNotification={props.pushNotification} />
            </div>
            <div className='bundle-page__saved-paragraph'>
              <Paragraph light small>
                Module sauvegardé<br />
                (<span title={lastSavedOn}>{lastSavedAgo}</span>)
              </Paragraph>
            </div>
            <div className='bundle-page__saving-paragraph'>
              <Paragraph light italic small>
                Enregistrement...
              </Paragraph>
            </div>
            <div className='bundle-page__save-button'>
              <Button
                primary
                disabled={isSaving}
                onClick={e => props.saveChanges(unsavedSettings)}>
                Enregistrer
              </Button>
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

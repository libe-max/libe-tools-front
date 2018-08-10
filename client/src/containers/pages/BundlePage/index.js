import { connect } from 'react-redux'
import { state2props, dispatch2props } from './connected'

import React, { Component } from 'react'
import Header from '../../blocks/Header'
import NotificationsPanel from '../../blocks/NotificationsPanel'
import ShadowBar from '../../../components/boxes/ShadowBar'
import BlockTitle from '../../../components/text-levels/BlockTitle'
import TextInput from '../../../components/inputs/TextInput'
import FileInput from '../../../components/inputs/FileInput'
import Button from '../../../components/buttons/Button'
import SearchField from '../../../components/inputs/SearchField'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'
import Wrapper from './style'

import { list as toolsList } from '../../../_config/tools'

class BundlePage extends Component {
  render () {
    return <Wrapper className='bundle-page'>
      <div className='bundle-page__header'><Header /></div>
      <div className='bundle-page__content'>
        <div className='bundle-page__notifications'><NotificationsPanel /></div>
        <div className='bundle-page__bundle-preview-box'>
          <div
            className='bundle-page__bundle-preview-box-slider'>
            bundle-page__bundle-preview-box
          </div>
        </div>
        <ThemeProvider theme={theme._shade}>
          <div className='bundle-page__bundle-settings-box'>
            <div className='bundle-page__bundle-settings-box-slider'>
              <div className='bundle-page__bundle-general-settings'>
                <BlockTitle level={2}>Paramètres généraux</BlockTitle>
                <TextInput label='Nom du module' placeholder='Nom du module' />
                <TextInput label='Auteur' placeholder='Auteur' />
                <Button minor>Minor button</Button>
                <SearchField></SearchField>
              </div>
              <div className='bundle-page__bundle-custom-settings'>
                <BlockTitle level={2}>Paramètres du module</BlockTitle>
                <FileInput label='Un fichier peut-être ?' />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </div>
      <div className='bundle-page__status-bar'>
        <ShadowBar>
          <Button link minor>‹ Retour</Button>
        </ShadowBar>
      </div>
    </Wrapper>
  }
}

export default connect(
  state2props,
  dispatch2props
)(BundlePage)

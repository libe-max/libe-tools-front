import { connect } from 'react-redux'
import { state2props, dispatch2props } from './connected'

import React, { Component } from 'react'
import Header from '../../blocks/Header'
import NotificationsPanel from '../../blocks/NotificationsPanel'
import ShadowBar from '../../../components/boxes/ShadowBar'
import Wrapper from './style'

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
        <div className='bundle-page__bundle-settings-box'>
          <div className='bundle-page__bundle-settings-box-slider'>
            bundle-page__bundle-settings-box
          </div>
        </div>
      </div>
      <div className='bundle-page__status-bar'><ShadowBar>bundle-page__status-bar</ShadowBar></div>
    </Wrapper>
  }
}

export default connect(
  state2props,
  dispatch2props
)(BundlePage)

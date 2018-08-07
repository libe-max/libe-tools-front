import { connect } from 'react-redux'
import { state2props, dispatch2props } from './connected'

import React, { Component } from 'react'
import ShadowBar from '../../../components/boxes/ShadowBar'
import Image from '../../../components/images/Image'
import MainTitle from '../../../components/text-levels/MainTitle'
import Wrapper from './style'

/*
 *   Header component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Header component for the "Libé tools" app
 *
 *   PROPS
 *   - no props -
 *
 */

class Header extends Component {
  render () {
    const props = this.props
    return <Wrapper className='header'>
      <ShadowBar>
        <div onClick={props.goHome}><Image contain src='/images/libe-logo.svg' /></div>
        <div onClick={props.goHome}><MainTitle>La boîte à outils de Six Plus</MainTitle></div>
      </ShadowBar>
    </Wrapper>
  }
}

export default connect(
  state2props,
  dispatch2props
)(Header)

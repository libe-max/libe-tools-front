import React, { Component } from 'react'

import iconLogo from '../../assets/libe-icon.svg'

import Wrapper from './style'

export default class LibeIconSignature extends Component {
  render () {
    return <Wrapper className='libe-icon-signature'>
      <img src={iconLogo} />
    </Wrapper>
  }
}

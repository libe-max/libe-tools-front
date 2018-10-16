import React, { Component } from 'react'

import iconLogo from '../../assets/libe-icon.svg'
import iconLogoNoBorders from '../../assets/libe-icon-no-borders.svg'

import Wrapper from './style'

export default class LibeIconSignature extends Component {
  render () {
    const { props } = this
    return <Wrapper className='libe-icon-signature'>
      <img
        alt='Petit logo de Libération'
        src={props.noBorders ? iconLogoNoBorders : iconLogo} />
    </Wrapper>
  }
}

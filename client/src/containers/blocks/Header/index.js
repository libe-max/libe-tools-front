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

export default class Header extends Component {
  render () {
    return <Wrapper className='header'>
      <ShadowBar>
        <Image contain src='/images/libe-logo.svg' />
        <MainTitle>
          La boîte à outils de Six Plus
        </MainTitle>
      </ShadowBar>
    </Wrapper>
  }
}
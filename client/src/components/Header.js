import React, { Component } from 'react'
import styled from 'styled-components'

import ShadowBar from './ShadowBar'
import Image from './Image'
import MainTitle from './MainTitle'

export default class Header extends Component {
  render () {
    const props = this.props
    const Header = styled.div`
      background: ${p => p.theme.colors.clearBg};
      #shadow-bar {
        display: flex;
        align-items: center;
      }
      #logo {
        height: ${props => props.theme.units(7)};
        @media screen and (max-width: ${p => p.theme.breakpoints.medium}) {
          height: ${props => props.theme.units(4)};
        }
      }
      #title {
        margin-left: ${props => props.theme.units(2)};
      }
    `
    return <Header {...props}>
      <ShadowBar id='shadow-bar'>
        <Image
          id='logo'
          src='/images/libe-logo.svg' />
        <MainTitle id='title'>
          La boîte à outils de Six Plus
        </MainTitle>
      </ShadowBar>
    </Header>
  }
}

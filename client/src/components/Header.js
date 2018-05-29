import React, { Component } from 'react'
import styled from 'styled-components'

import ShadowBar from './ShadowBar'
import Image from './Image'
import MainTitle from './MainTitle'

export default class Header extends Component {
  render () {
    const props = this.props
    const Header = styled.div`
      display: flex;
      > div > img {
        height: ${props => props.theme.units(7)};
      }
      > div > h1 {
        margin-top: ${props => props.theme.units(1.5)};
        margin-left: ${props => props.theme.units(2)};
      }
    `
    return (
      <Header {...props}>
        <ShadowBar>
          <Image src='/images/libe-logo.svg' />
          <MainTitle>
            La boîte à outils de Six Plus
          </MainTitle>
        </ShadowBar>
      </Header>
    )
  }
}

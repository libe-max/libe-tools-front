import React, { Component } from 'react'
import styled from 'styled-components'

export default class MainTitle extends Component {
  render () {
    const props = this.props
    const MainTitle = styled.h1`
      font-size: ${props => props.theme.units(3)};
      line-height: ${props => props.theme.units(4)};
      font-family: ${props => props.theme.fonts.brand};
      color: ${props => props.theme.colors.black};
    `
    return (
      <MainTitle {...props}>
        {this.props.children}
      </MainTitle>
    )
  }
}

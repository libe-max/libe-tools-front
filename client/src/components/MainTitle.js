import React, { Component } from 'react'
import styled from 'styled-components'

export default class MainTitle extends Component {
  render () {
    const props = this.props
    const MainTitle = styled.h1`
      font-size: ${p => p.theme.units(3)};
      line-height: ${p => p.theme.units(4)};
      font-family: ${p => p.theme.fonts.brand};
      color: ${p => p.theme.colors.text};
    `
    return <MainTitle {...props}>
      {props.children}
    </MainTitle>
  }
}

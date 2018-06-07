import React, { Component } from 'react'
import styled from 'styled-components'

export default class InputLabel extends Component {
  render () {
    const props = this.props
    const Wrapper = styled.label`
      display: block;
      box-sizing: border-box;
      color: ${p => p.theme.colors.lightText};
      font-family: ${p => p.theme.fonts.main};
      font-size: ${p => p.theme.units(1.5)};
      line-height: ${p => p.theme.units(2)};
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: ${p => p.theme.units(1)};
    `

    return <Wrapper {...props}>
      {props.children}
    </Wrapper>
  }
} 

import React, { Component } from 'react'
import styled from 'styled-components'

export default class ShadowBox extends Component {
  render () {
    const props = this.props
    const ShadowBox = styled.div`
      border-radius: ${p => p.theme.units(1)};
      box-shadow: ${p => p.theme.shadows.small};
      box-sizing: border-box;
      overflow: hidden;
      border:
        ${p => p.theme.units(0.25)}
        ${p => p.theme.colors.borders}
        solid;
    `
    return <ShadowBox {...props}>
      {props.children}
    </ShadowBox>
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

export default class ShadowBox extends Component {
  render () {
    const props = this.props
    const ShadowBox = styled.div`
      border-radius: ${props => props.theme.units(1)};
      box-shadow: ${props => props.theme.shadows.small};
      box-sizing: border-box;
      overflow: hidden;
      border:
        ${props => props.theme.units(.25)}
        ${props => props.theme.colors.borders}
        solid;
    `
    return (
      <ShadowBox {...props}>
        {props.children}
      </ShadowBox>
    )
  }
}

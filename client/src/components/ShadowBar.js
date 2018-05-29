import React, { Component } from 'react'
import styled from 'styled-components'

export default class ShadowBar extends Component {
  render () {
    const props = this.props
    const ShadowBar = styled.div`
      width: 100%;
      display: flex;
      box-shadow: ${props => props.theme.shadows.medium};
      padding: ${props => props.theme.units(2)};
    `
    return (
      <ShadowBar {...props}>
        {this.props.children}
      </ShadowBar>
    )
  }
}

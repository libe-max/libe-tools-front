import React, { Component } from 'react'
import styled from 'styled-components'

export default class ShadowBar extends Component {
  render () {
    const props = this.props
    const ShadowBar = styled.div`
      width: 100%;
      display: flex;
      box-sizing: border-box;
      box-shadow: ${p => p.theme.shadows.medium};
      padding: ${p => p.theme.units(2)};
    `
    return <ShadowBar {...props}>
      {props.children}
    </ShadowBar>
  }
}

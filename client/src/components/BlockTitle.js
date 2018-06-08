import React, { Component } from 'react'
import styled from 'styled-components'

export default class BlockTitle extends Component {
  render () {
    const props = this.props
    const BlockTitle = styled.div`
      font-size: ${p => p.theme.units(2.5)};
      line-height: ${p => p.theme.units(3)};
      font-family: ${p => p.theme.fonts.main};
      color: ${p => p.theme.colors.text};
      font-weight: 600;
    `
    return <BlockTitle {...props}>
      {props.children}
    </BlockTitle>
  }
}

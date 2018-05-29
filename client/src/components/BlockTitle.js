import React, { Component } from 'react'
import styled from 'styled-components'

export default class BlockTitle extends Component {
  render () {
    const props = this.props
    const BlockTitle = styled.div`
      font-size: ${props => props.theme.units(2.5)};
      line-height: ${props => props.theme.units(3)};
      font-family: ${props => props.theme.fonts.main};
      color: ${props => props.theme.colors.black};
      font-weight: 600;
    `
    return (
      <BlockTitle {...props}>
        {this.props.children}
      </BlockTitle>
    )
  }
}

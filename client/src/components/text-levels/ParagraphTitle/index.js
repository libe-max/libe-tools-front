import React, { Component } from 'react'
import styled from 'styled-components'
import Heading from '../Heading'

export default class ParagraphTitle extends Component {
  render () {
    const props = this.props
    const BlockTitle = styled.div`
      h1, h2, h3, h4, h5, h6, span {
        color: ${p => p.theme.colors.text};
        font-family: ${p => p.theme.fonts.easy};
        font-size: ${p => p.theme.units(2)};
        line-height: ${p => p.theme.units(3)};
        font-weight: 600;
        margin: 0;
        padding: 0;
      }
    `
    return <BlockTitle {...props}>
      <Heading level={props.level || 5}>
        {props.children}
      </Heading>
    </BlockTitle>
  }
}

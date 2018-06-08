import React, { Component } from 'react'
import styled from 'styled-components'

export default class Paragraph extends Component {
  render () {
    const props = this.props
    const Paragraph = styled.div`
      > p {
        margin: 0;
        padding: 0;
        font-family: ${p => p.theme.fonts.main};
        font-size: ${p => p.theme.units(2)};
        line-height: ${p => p.theme.units(3)};
      }
    `
    return <Paragraph {...props}>
      <p>{props.children}</p>
    </Paragraph>
  }
}

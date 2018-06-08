import React, { Component } from 'react'
import styled from 'styled-components'

export default class Paragraph extends Component {
  render () {
    const props = this.props
    const Paragraph = styled.p`
      margin: 0;
      padding: 0;
      font-family: ${p => p.theme.fonts.main};
      line-height: ${p => props.small ? p.theme.units(2) : p.theme.units(3)};
      font-size: ${p => props.small ? p.theme.units(1.75) : p.theme.units(2)};
      color: ${p => props.light ? p.theme.colors.lightText : p.theme.colors.text};
    `
    return <Paragraph {...props}>
      {props.children}
    </Paragraph>
  }
}

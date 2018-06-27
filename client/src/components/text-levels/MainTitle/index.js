import React, { Component } from 'react'
import styled from 'styled-components'
import Heading from '../Heading'

export default class MainTitle extends Component {
  render () {
    const props = this.props
    const MainTitle = styled.div`
      h1, h2, h3, h4, h5, h6, span {
        font-size: ${p => p.theme.units(3)};
        line-height: ${p => p.theme.units(4)};
        font-family: ${p => p.theme.fonts.brand};
        color: ${p => p.theme.colors.text};
        font-weight: 600;
        margin: 0;
        padding: 0
        @media screen and (max-width: ${p => p.theme.breakpoints.medium}) {
          font-size: ${p => p.theme.units(2.75)};
          line-height: ${p => p.theme.units(3)};
        }
      }
    `
    return <MainTitle {...props}>
      <Heading level={props.level || 1}>
        {props.children}
      </Heading>
    </MainTitle>
  }
}

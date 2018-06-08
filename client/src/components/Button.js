import React, { Component } from 'react'
import styled from 'styled-components'

export default class Button extends Component {
  render () {
    const props = this.props
    const Button = styled.button`
      font-family: ${p => p.theme.fonts.main};
      font-size: ${p => p.theme.units(2)};
      line-height: ${p => p.theme.units(3)};
      font-style: ${props.dangerous ? 'italic' : null};
      font-weight: 400;
      height: ${p => p.theme.units(4)};
      background: ${p => {
        if (props.minor && props.dangerous) return p.theme.colors.shadedBg
        else if (props.dangerous) return p.theme.colors.dangerText
        else if (props.minor) return p.theme.colors.shadedBg
        else return p.theme.colors.action
      }};
      color: ${p => {
        if (props.minor && props.dangerous) return p.theme.colors.dangerText
        else if (props.dangerous) return p.theme.colors.clearText
        else if (props.minor) return p.theme.colors.lightText
        else return p.theme.colors.clearText
      }}
      padding:
        ${p => p.theme.units(.5)}
        ${p => p.theme.units(2)};
      border-radius: ${p => p.theme.units(2)};
      box-shadow: ${p => props.minor ? null : p.theme.shadows.neat};
      cursor: pointer;
      border: none;
      box-sizing: border-box;
      :hover {
        box-shadow: 
          ${p => p.theme.shadows.neat},
          ${p => p.theme.shadows.small};
      }
    `
    const PrimaryButton = Button.extend`
      font-size: ${p => p.theme.units(2.5)};
      font-weight: 600;
      line-height: ${p => p.theme.units(3)};
      border-radius: ${p => p.theme.units(3)};
      height: ${p => p.theme.units(6)};
      padding:
        ${p => p.theme.units(1.5)}
        ${p => p.theme.units(3)};
    `
    const LinkButton = Button.extend`
      color: ${p => {
        if (props.dangerous) return p.theme.colors.dangerText
        else if (props.minor) return p.theme.colors.lightText
        else return p.theme.colors.action
      }};
      padding: 0;
      box-shadow: none;
      text-decoration: underline;
      height: auto;
      background: transparent;
      :hover { box-shadow: none; }
    `
    if (props.primary) return <PrimaryButton {...props}>
      {props.children}
    </PrimaryButton>
    else if (props.link) return <LinkButton {...props}>
      {props.children}
    </LinkButton>
    else return <Button {...props}>
      {props.children}
    </Button>
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

export default class Button extends Component {
  render () {
    const props = this.props
    const Button = styled.button`
      font-family: ${props => props.theme.fonts.main};
      font-size: ${props => props.theme.units(2)};
      line-height: ${props => props.theme.units(3)};
      font-style: ${props.dangerous ? 'italic' : null};
      font-weight: 400;
      height: ${props => props.theme.units(4)};
      background: ${props => {
        if (props.minor && props.dangerous) return props.theme.colors.shadedBg
        else if (props.dangerous) return props.theme.colors.dangerText
        else if (props.minor) return props.theme.colors.shadedBg
        else return props.theme.colors.action
      }};
      color: ${props => {
        if (props.minor && props.dangerous) return props.theme.colors.dangerText
        else if (props.dangerous) return props.theme.colors.clearText
        else if (props.minor) return props.theme.colors.lightText
        else return props.theme.colors.clearText
      }}
      padding:
        ${props => props.theme.units(.5)}
        ${props => props.theme.units(2)};
      border-radius: ${props => props.theme.units(2)};
      box-shadow: ${props => props.minor ? null : props.theme.shadows.neat};
      cursor: pointer;
      border: none;
      box-sizing: border-box;
      :hover {
        box-shadow: 
          ${props => props.theme.shadows.neat},
          ${props => props.theme.shadows.small};
      }
    `
    const PrimaryButton = Button.extend`
      font-size: ${props => props.theme.units(2.5)};
      font-weight: 600;
      line-height: ${props => props.theme.units(3)};
      border-radius: ${props => props.theme.units(3)};
      height: ${props => props.theme.units(6)};
      padding:
        ${props => props.theme.units(1.5)}
        ${props => props.theme.units(3)};
    `
    const LinkButton = Button.extend`
      color: ${props => {
        if (props.dangerous) return props.theme.colors.dangerText
        else if (props.minor) return props.theme.colors.lightText
        else return props.theme.colors.action
      }};
      padding: 0;
      box-shadow: none;
      text-decoration: underline;
      height: auto;
      background: transparent;
      :hover {
        box-shadow: none;
      }
    `
    if (props.primary) return (
      <PrimaryButton {...props}>
        {props.children}
      </PrimaryButton>)
    else if (props.link) return (
      <LinkButton {...props}>
        {props.children}
      </LinkButton>)
    else return (
      <Button {...props}>
        {props.children}
      </Button>
    )
  }
}

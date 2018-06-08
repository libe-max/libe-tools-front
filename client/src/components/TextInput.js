import React, { Component } from 'react'
import styled from 'styled-components'
import InputLabel from './InputLabel'

export default class TextInput extends Component {
  render () {
    const props = this.props
    const Wrapper = styled.div`
      width: 100%;
      box-sizing: border-box;
      #label {
        display: ${props.label ? 'block' : 'none'};
      }
      input {
        width: 100%;
        box-sizing: border-box;
        border: none;
        height: ${p => p.theme.units(5)};
        padding: 0 ${p => p.theme.units(1)};
        color: ${p => p.theme.colors.text};
        font-family: ${p => p.theme.fonts.main};
        font-size: ${p => p.theme.units(2)};
        line-height: ${p => p.theme.units(3)};
        border-bottom-style: solid;
        border-bottom-width: ${p => p.theme.units(0.25)};
        border-bottom-color: ${p => p.theme.colors.borders};
      }
      input::placeholder {
        color: ${p => p.theme.colors.lightText};
      }
    `
    return <Wrapper {...props}>
      <InputLabel
        id='label'>
        Label
      </InputLabel>
      <input
        type='text'
        placeholder={props.placeholder} />
    </Wrapper>
  }
}

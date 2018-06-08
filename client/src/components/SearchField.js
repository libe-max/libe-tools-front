import React, { Component } from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'

export default class SearchField extends Component {
  render () {
    const props = this.props
    const Wrapper = styled.div`
      #input input {
        border-style: solid;
        border-width: ${p => p.theme.units(0.25)};
        border-color: ${p => p.theme.colors.borders};
        border-radius: ${p => p.theme.units(2.5)};
        background: ${p => p.theme.colors.shadedBg};
        padding: 0 ${p => p.theme.units(2)};
      }
    `
    return <Wrapper {...props}>
      <TextInput
        id='input'
        placeholder={props.placeholder} />
    </Wrapper>
  }
}

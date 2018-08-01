import React, { Component } from 'react'
import InputLabel from '../../text-levels/InputLabel'
import Wrapper from './style'

/*
 *   Text input component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Simple <input type='text'>, with or without a label
 *
 *   VARIANTS
 *   label
 *
 *   PROPS
 *   label, placeholder, value, defaultValue, onChange,
 *   onFocus, onBlur, onClick
 *
 */

export default class TextInput extends Component {
  render () {
    const props = this.props
    let classes = 'text-input'
    if (props.label) classes += ' text-input_with-label'
    return <Wrapper className={classes}>
      <InputLabel>{props.Label}</InputLabel>
      <input
        type='text'
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onClick={props.onClick}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue} />
    </Wrapper>
  }
}

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
 *   onFocus, onBlur, onClick, onKeyPress, blurOnEnter
 *
 */

export default class TextInput extends Component {
  render () {
    const props = this.props
    let classes = 'text-input'
    if (props.label) classes += ' text-input_with-label'

    const handleKeyPress = e => {
      if (props.onKeyPress) props.onKeyPress(e)
      if (props.blurOnEnter && e.key === 'Enter') this.input.blur()
    }

    return <Wrapper className={classes}>
      <InputLabel>{props.label}</InputLabel>
      <input
        type='text'
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onClick={props.onClick}
        onKeyPress={handleKeyPress}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        ref={node => { this.input = node }} />
    </Wrapper>
  }
}

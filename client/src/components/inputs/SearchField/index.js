import React, { Component } from 'react'
import TextInput from '../TextInput'
import Wrapper from './style'

/*
 *   Search field component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Search field component
 *
 *   PROPS
 *   placeholder, value, defaultValue, onChange, onFocus,
 *   onBlur, onClick
 *
 */

export default class SearchField extends Component {
  render () {
    const props = this.props
    return <Wrapper className='search-field'>
      <TextInput
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

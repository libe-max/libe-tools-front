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
 *   placeholder, onChange
 *
 */

export default class SearchField extends Component {
  render () {
    const props = this.props
    return <Wrapper className='search-field'>
      <TextInput
        placeholder={props.placeholder}
        onChange={props.onChange} />
    </Wrapper>
  }
}

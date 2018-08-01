import React, { Component } from 'react'
import TextInput from '../TextInput'
import Button from '../../buttons/Button'
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
    const inputDom = this.node ? this.node.querySelector('input') : null
    const inputValue = inputDom ? inputDom.value : null

    /* Inner logic */
    const focusInput = e => inputDom.focus()
    const blurInput = e => inputDom.blur()
    const clearInput = e => {
      inputDom.value = ''
      focusInput()
      blurInput()
    }

    /* Assign classes to component */
    let classes = ['search-field']
    if (!inputValue && !props.value) {
      classes.push('search-field_empty')
    }

    /* Display */
    return <Wrapper
      className={classes.join(' ')}
      innerRef={node => { this.node = node }}>
      <TextInput
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onClick={props.onClick}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue} />
      <div className='search-field__magnifying-icon'>
        <Button
          alt='Magnifying icon'
          onClick={focusInput}
          icon='/images/magnifying-icon.svg' />
      </div>
      <div className='search-field__empty-icon'>
        <Button
          alt='Close icon'
          onClick={clearInput}
          icon='/images/close-icon.svg' />
      </div>
    </Wrapper>
  }
}

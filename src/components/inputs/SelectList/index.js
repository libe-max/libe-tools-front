import React, { Component } from 'react'
import InputLabel from '../../text-levels/InputLabel'
import Wrapper from './style'

/*
 *   Select list component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Simple <select><option /></select>, with or without a
 *   label
 *
 *   VARIANTS
 *   label
 *
 *   PROPS
 *   label, options(label, value, disabled, selected),
 *   disabled, onChange, onFocus, onBlur, onClick
 *
 */

export default class SelectList extends Component {
  constructor (props) {
    super(props)
    const options = props.options || []
    const placeholderOption = options.filter(option => option.selected && option.disabled)[0]
    this.onChangeWrapper = this.onChangeWrapper.bind(this)
    this.state = { placeholder: placeholderOption }
  }

  render () {
    const props = this.props
    const state = this.state
    const options = props.options || []
    const defaultOption = options.filter(option => option.selected)[0]
    const defaultValue = defaultOption ? defaultOption.value : undefined
    /* Assign classes to component */
    const classes = ['select-list']
    if (props.label) classes.push('select-list_with-label')
    if (props.disabled) classes.push('select-list_disabled')
    if (state.placeholder) {
      if (
        this.input &&
        this.input.value &&
        this.input.value === state.placeholder.value) {
        classes.push('select-list_placeholder-selected')
      } else if (!this.input) classes.push('select-list_placeholder-selected')
    }
    /* Display */
    return <Wrapper className={classes.join(' ')}>
      <InputLabel>{props.label}</InputLabel>
      <select
        defaultValue={defaultValue}
        disabled={props.disabled}
        onChange={this.onChangeWrapper}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onClick={props.onClick}
        ref={node => { this.input = node }}>{
          options.map(option => {
            if (!option.value) console.error('Options need a value field')
            return <option
              key={option.value}
              disabled={option.disabled}
              label={option.label}
              value={option.value}>
              {option.label}
            </option>
          })
        }</select>
    </Wrapper>
  }

  onChangeWrapper (e) {
    const props = this.props
    this.setState({ placeholder: false })
    if (!props.onChange) return
    if (typeof props.onChange !== 'function') return
    return props.onChange(e)
  }
}

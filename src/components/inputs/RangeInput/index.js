import React, { Component } from 'react'
import InputLabel from '../../text-levels/InputLabel'
import Paragraph from '../../text-levels/Paragraph'
import Wrapper from './style'

/*
 *   Range input component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Simple <input type='range'>, with or without a label
 *
 *   VARIANTS
 *   label
 *
 *   PROPS
 *   label, placeholder, value, defaultValue, min,
 *   max, unit, onChange, onFocus, onBlur, onClick,
 *   onKeyPress
 *
 */

export default class RangeInput extends Component {
  constructor (props) {
    super(props)
    this.setValue = this.setValue.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateTextAndFakeRange = this.updateTextAndFakeRange.bind(this)
    this.defaultValue = (() => {
      if (props.defaultValue) return props.defaultValue
      if (props.min && props.max) return (props.min + props.max) / 2
      if (props.min) return (props.min + 100) / 2
      if (props.max) return (props.max) / 2
      return 50
    })()
  }

  setValue (val) {
    if (!parseInt(val, 10)) return
    this.input.value = parseInt(val, 10)
    this.updateTextAndFakeRange()
    this.forceUpdate()
  }

  componentDidMount () {
    this.updateTextAndFakeRange()
  }

  handleChange (e) {
    const { props } = this
    if (props.onChange) props.onChange(e)
    this.updateTextAndFakeRange()
  }

  updateTextAndFakeRange () {
    const { props, input, valueDisplayer, fakeGauge } = this
    if (!input || !valueDisplayer || !fakeGauge) return
    const min = props.min || 0
    const max = props.max || 100
    const ratio = input.value ? ((input.value - min) / (max - min)) : 0.5
    fakeGauge.style.right = `${100 - 100 * ratio}%`
    valueDisplayer
      .querySelector('.paragraph')
      .innerHTML = `${input.value}${props.unit ? props.unit : ''}`
  }

  render () {
    const { props } = this
    let classes = 'range-input'
    if (props.label) classes += ' range-input_with-label'
    return <Wrapper className={classes}>
      <InputLabel>{props.label}</InputLabel>
      <div className='range-input__input-wrapper'>
        <div
          className='range-input__fake-gauge'
          ref={node => { this.fakeGauge = node }} />
        <div
          className='range-input__value-displayer-wrapper'
          ref={node => { this.valueDisplayer = node }}>
          <Paragraph />
        </div>
        <input
          type='range'
          value={props.value}
          min={props.min || 0}
          max={props.max || 100}
          onChange={this.handleChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onClick={props.onClick}
          onKeyPress={props.onKeyPress}
          placeholder={props.placeholder}
          defaultValue={this.defaultValue}
          ref={node => { this.input = node }} />
      </div>
    </Wrapper>
  }
}

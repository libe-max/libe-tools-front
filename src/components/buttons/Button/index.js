import React, { Component } from 'react'
import Wrapper from './style'

/*
 *   Button component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Component for action buttons
 *
 *   VARIANTS
 *   primary, dangerous, minor, link, icon, disabled
 *
 *   PROPS
 *   onClick, tabIndex, primary, dangerous, minor,
 *   disabled, link, children, icon, alt
 *
 */

export default class Button extends Component {
  render () {
    const props = this.props
    
    /* Inner logic */
    const disabledMessage = typeof props.disabled === 'string'
      ? props.disabled
      : ''

    /* Assign classes to component */
    let classes = 'button'
    if (props.primary) classes += ' button_primary'
    if (props.dangerous) classes += ' button_dangerous'
    if (props.minor) classes += ' button_minor'
    if (props.link) classes += ' button_link'
    if (props.icon) classes += ' button_icon'
    if (props.disabled) classes += ' button_disabled'

    /* Display */
    return <Wrapper
      onFocus={props.disabled ? () => this.node.blur() : null}
      onClick={!props.disabled ? props.onClick : null}
      tabIndex={!props.disabled ? props.tabIndex : -1}
      innerRef={node => { this.node = node }}
      title={disabledMessage}
      className={classes}>
      {props.children}
      <img
        className='button__icon'
        alt={props.alt}
        src={props.icon} />
    </Wrapper>
  }
}

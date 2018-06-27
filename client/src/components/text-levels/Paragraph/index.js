import React, { Component } from 'react'
import Wrapper from './style'

/*
 *   Paragraph component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Component for usual text
 *
 *   VARIANTS
 *   small, light
 *
 *   PROPS
 *   small, light, children
 *
 */

export default class Paragraph extends Component {
  render () {
    const props = this.props
    let classes = 'paragraph'
    if (props.small) classes += ' paragraph_small'
    if (props.light) classes += ' paragraph_light'
    return <Wrapper {...props} className={classes}>
      {props.children}
    </Wrapper>
  }
}

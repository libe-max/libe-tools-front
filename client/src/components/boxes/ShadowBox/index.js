import React, { Component } from 'react'
import Wrapper from './style'

/*
 *   Shadowbox component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Box with a small shadow for boxed components
 *
 *   PROPS
 *   children
 *
 */

export default class ShadowBox extends Component {
  render () {
    const props = this.props
    return <Wrapper {...props} className='shadow-box'>
      {props.children}
    </Wrapper>
  }
}

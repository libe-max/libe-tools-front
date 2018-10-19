import React, { Component } from 'react'
import Wrapper from './style'

/*
 *   Shadowbar component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Box with a shadow for major components
 *
 *   PROPS
 *   children
 *
 */

export default class ShadowBar extends Component {
  render () {
    const props = this.props
    return <Wrapper className='shadow-bar'>
      {props.children}
    </Wrapper>
  }
}

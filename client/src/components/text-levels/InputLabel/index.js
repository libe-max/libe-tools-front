import React, { Component } from 'react'
import Wrapper from './style'

/*
 *   Input label component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Label for inputs
 *
 *   PROPS
 *   children
 *
 */

export default class InputLabel extends Component {
  render () {
    const props = this.props
    return <Wrapper className='input-label'>
      {props.children}
    </Wrapper>
  }
}

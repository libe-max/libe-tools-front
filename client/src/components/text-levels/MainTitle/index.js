import React, { Component } from 'react'
import Heading from '../Heading'
import Wrapper from './style'

/*
 *   Main title component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Main heading item.
 *
 *   PROPS
 *   level, children
 *
 */

export default class MainTitle extends Component {
  render () {
    const props = this.props
    return <Wrapper {...props} className='main-title'>
      <Heading level={props.level || 1}>
        {props.children}
      </Heading>
    </Wrapper>
  }
}

import React, { Component } from 'react'
import Heading from '../Heading'
import Wrapper from './style'

/*
 *   Block title component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Small heading item.
 *
 *   PROPS
 *   level, children
 *
 */

export default class BlockTitle extends Component {
  render () {
    const props = this.props
    return <Wrapper className='block-title'>
      <Heading level={props.level || 3}>
        {props.children}
      </Heading>
    </Wrapper>
  }
}

import React, { Component } from 'react'
import Heading from '../Heading'
import Wrapper from './style'

/*
 *   Paragraph title component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Paragraph heading item.
 *
 *   PROPS
 *   level, children
 *
 */

export default class ParagraphTitle extends Component {
  render () {
    const props = this.props
    return <Wrapper {...props} className='paragraph-title'>
      <Heading level={props.level || 5}>
        {props.children}
      </Heading>
    </Wrapper>
  }
}

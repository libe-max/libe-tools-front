import React, { Component } from 'react'

/*
 *   Heading component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   This component returns a heading tag according to the
 *   provided 'level' prop.
 *
 *   PROPS
 *   level, children
 *
 */

export default class Heading extends Component {
  render () {
    const props = this.props
    if (props.level === 1) return <h1 {...props} className='heading'>{props.children}</h1>
    else if (props.level === 2) return <h2 {...props} className='heading'>{props.children}</h2>
    else if (props.level === 3) return <h3 {...props} className='heading'>{props.children}</h3>
    else if (props.level === 4) return <h4 {...props} className='heading'>{props.children}</h4>
    else if (props.level === 5) return <h5 {...props} className='heading'>{props.children}</h5>
    else if (props.level === 6) return <h6 {...props} className='heading'>{props.children}</h6>
    else return <span {...props} className='heading'>{props.children}</span>
  }
}

import React, { Component } from 'react'

export default class Heading extends Component {
  render () {
    const props = this.props
    if (props.level === 1) return <h1>{props.children}</h1>
    else if (props.level === 2) return <h2>{props.children}</h2>
    else if (props.level === 3) return <h3>{props.children}</h3>
    else if (props.level === 4) return <h4>{props.children}</h4>
    else if (props.level === 5) return <h5>{props.children}</h5>
    else if (props.level === 6) return <h6>{props.children}</h6>
    else return <span>{props.children}</span>
  }
}

import React, { Component } from 'react'

export default class Image extends Component {
  render () {
    const props = this.props
    return <img {...props} />
  }
}

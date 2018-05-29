import React, { Component } from 'react'
import styled from 'styled-components'

export default class Button extends Component {
  render () {
    const props = this.props
    return (
      <div {...props}>
        Button
      </div>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

export default class Paragraph extends Component {
  render () {
    const props = this.props
    return (
      <div {...props}>
        Paragraph
      </div>
    )
  }
}

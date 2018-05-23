import React, { Component } from 'react'
import styled from 'styled-components'

export default class Button extends Component {
  render () {
    const Button = styled.button`
      background: aliceblue;
      cursor: pointer;
    `
    return (
      <Button onClick={this.props.onClick}>
        {this.props.text}
      </Button>
    )
  }
}

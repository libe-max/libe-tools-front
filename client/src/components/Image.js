import React, { Component } from 'react'
import styled from 'styled-components'

export default class Image extends Component {
  render () {
    const props = this.props
    const Image = styled.div`
      background-image: url(${props.src});
      background-size: ${props.contain ? 'contain' : 'cover'};
      background-position: ${props.position ? props.position : 'center'};
      background-repeat: ${props.repeat ? props.repeat : 'no-repeat'};
      height: ${props.height ? `${props.height}px` : 'fit-content'};
      width: ${props.width ? `${props.width}px` : 'auto'};
      > img {
        width: 100%;
        display: block;
        box-sizing: border-box;
        height: 100%;
        opacity: 0;
      }      
    `
    return (
      <Image {...props}>
        <img {...props} />
      </Image>
    )
  }
}

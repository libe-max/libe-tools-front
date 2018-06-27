import React, { Component } from 'react'
import Wrapper from './style'

/*
 *   Image component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Image component, displaying a box with the image as
 *   a background, and sized according to the raw
 *   dimensions of the image, or as a cover image on a 
 *   box sized according to the provided width and height
 *   props
 *
 *   PROPS
 *   src, contain, position, repeat, height, width
 *
 */

export default class Image extends Component {
  render () {
    const props = this.props
    const style = {
      backgroundImage: `url(${props.src})`,
      backgroundSize: props.contain ? 'contain' : 'cover',
      backgroundPosition: props.position || 'center',
      backgroundRepeat: props.repeat || 'no-repeat',
      height: props.height ? `${props.height}px` : null,
      width: props.width ? `${props.width}px` : null
    }
    return <Wrapper {...props} className='image' style={style}>
      <img {...props} />
    </Wrapper>
  }
}

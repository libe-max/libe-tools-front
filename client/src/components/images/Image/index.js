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
    const alt = props.alt || 'no-description'
    const title = props.title || null
    const wrapperStyle = {
      backgroundImage: `url(${props.src})`,
      backgroundSize: props.contain ? 'contain' : 'cover',
      backgroundPosition: props.position || 'center',
      backgroundRepeat: props.repeat || 'no-repeat',
      height: props.height ? `${props.height}px` : null,
      width: props.width ? `${props.width}px` : null
    }
    const imgStyle = {}
    if (props.height) imgStyle.height = `${props.height}px`
    if (props.width) imgStyle.width = `${props.width}px`

    /* Assign classes to component */
    let classes = 'image'
    if (props.contain) classes += ' image_contained'
    if (props.position) classes += ' image_positioned'
    if (props.repeat) classes += ' image_repeated'
    if (props.width) classes += ' image_fixed-width'
    if (props.height) classes += ' image_fixed-height'

    return <Wrapper style={wrapperStyle} className={classes}>
      <img
        src={props.src}
        style={imgStyle}
        alt={alt}
        title={title} />
    </Wrapper>
  }
}

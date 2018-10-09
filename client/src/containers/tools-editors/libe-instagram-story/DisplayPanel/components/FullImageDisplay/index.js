import React, { Component } from 'react'

import LibeIconSignature from '../LibeIconSignature'

import Wrapper from './style'

export default class FullImageDisplay extends Component {
  render () {
    const { props } = this
    const { slide, dispatchEdition, width, height} = props
    const styles = {
      image: {
        marginBottom: `${104 / 1080 * width}px`
      },
      title: {
        marginBottom: `${36 / 1080 * width}px`,
        fontSize: `${50 / 1080 * width}px`,
        lineHeight: `${50 / 1080 * width}px`,
        padding: `${12 / 1080 * width}px`,
        paddingTop: `${18 / 1080 * width}px`
      },
      text: {
        fontSize: `${62 / 1080 * width}px`,
        lineHeight: `${71 / 1080 * width}px`
      }
    }
    const rootClass = `libe-insta-full-image-display-slide`
    const classes = [rootClass]
    return <Wrapper
      className={classes.join(` `)}
      innerRef={node => this.$wrapper = node}>
      <div className={`${rootClass}__safe-zone`} />
      <div className={`${rootClass}__background-images`}>{
        slide.backgroundImages.map((img, i) => {
          const style = {
            backgroundImage: `url(${img.src})`,
            backgroundPosition: `${img.position}% ${img.position}%`
          }
          return <div
            key={i}
            style={style}
            className={`${rootClass}__background-image`}>
          </div>
        })
      }</div>
      <div className={`${rootClass}__icon-signature`}>
        <LibeIconSignature />
      </div>
    </Wrapper>
  }
}

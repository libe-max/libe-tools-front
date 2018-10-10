import React, { Component } from 'react'

import LibeIconSignature from '../LibeIconSignature'

import Wrapper from './style'

export default class TextOnBgImageDisplay extends Component {
  render () {
    const { props } = this
    const { slide, width } = props
    const backgroundImages = slide.backgroundImages || []
    const text = slide.text || {}
    const styles = {
      text: {
        padding: `${24 / 1080 * width}px`,
        fontSize: `${62 / 1080 * width}px`,
        lineHeight: `${71 / 1080 * width}px`
      }
    }
    const rootClass = `libe-insta-text-on-bg-image-display-slide`
    const classes = [rootClass]
    return <Wrapper
      className={classes.join(` `)}
      innerRef={node => this.$wrapper = node}>
      <div className={`${rootClass}__safe-zone`} />
      <div className={`${rootClass}__background-images`}>{
        backgroundImages.map((img, i) => {
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
      <div
        style={styles.text}
        className={`${rootClass}__text`}>
        {text.value}
      </div>
      <div className={`${rootClass}__icon-signature`}>
        <LibeIconSignature />
      </div>
    </Wrapper>
  }
}
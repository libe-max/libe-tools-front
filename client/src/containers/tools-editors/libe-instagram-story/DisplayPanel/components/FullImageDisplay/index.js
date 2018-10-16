import React, { Component } from 'react'

import LibeIconSignature from '../LibeIconSignature'
import bgImagePlaceholder from '../../assets/bg-image-placeholder.svg'

import Wrapper from './style'

export default class FullImageDisplay extends Component {
  render () {
    const { props } = this
    const { slide } = props
    const backgroundImages = slide.backgroundImages || []
    const rootClass = `libe-insta-full-image-display-slide`
    const classes = [rootClass]
    return <Wrapper
      className={classes.join(` `)}
      innerRef={node => this.$wrapper = node}>
      <div className={`${rootClass}__safe-zone`} />
      <div className={`${rootClass}__background-images`}>{
        backgroundImages.map((img, i) => {
          const style = {
            backgroundImage: `url(${img.src || bgImagePlaceholder})`,
            backgroundPosition: `${img.position || 50}% ${img.position || 50}%`
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

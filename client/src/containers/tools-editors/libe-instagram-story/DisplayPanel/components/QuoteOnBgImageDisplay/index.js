import React, { Component } from 'react'

import LibeIconSignature from '../LibeIconSignature'

import Wrapper from './style'

export default class QuoteOnBgImageDisplay extends Component {
  render () {
    const { props } = this
    const { slide, dispatchEdition, width, height} = props
    const styles = {
      
    }
    const rootClass = `libe-insta-quote-on-bg-image-display-slide`
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

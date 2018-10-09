import React, { Component } from 'react'

import LibeIconSignature from '../LibeIconSignature'

import Wrapper from './style'

export default class ImgAndTextDisplay extends Component {
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
    const rootClass = `libe-insta-img-and-text-display-slide`
    const classes = [rootClass]
    return <Wrapper
      className={classes.join(` `)}
      innerRef={node => this.$wrapper = node}>
      <div className={`${rootClass}__safe-zone`} />
      <div className={`${rootClass}__image-title-and-text`}>
        <div
          style={styles.image}
          className={`${rootClass}__image`}>
          <img src={slide.image.src} />
        </div>
        <div
          style={styles.title}
          className={`${rootClass}__title`}>
          Title
        </div>
        <div
          style={styles.text}
          className={`${rootClass}__text`}>
          Text
        </div>
      </div>
      <div className={`${rootClass}__icon-signature`}>
        <LibeIconSignature />
      </div>
    </Wrapper>
  }
}

import React, { Component } from 'react'

import LibeIconSignature from '../LibeIconSignature'
import bgImagePlaceholder from '../../assets/bg-image-placeholder.svg'

import Wrapper from './style'

export default class LibeInstaSlideCoverDisplay extends Component {
  render () {
    const { props } = this
    const { slide, width } = props
    const backgroundImages = slide.backgroundImages || []
    const text = slide.text || {}
    const title = slide.title || {}

    const styles = {
      titleAndText: {
        width: `${780 / 1080 * width}px`,
      },
      title: {
        maxWidth: `${450 / 1080 * width}px`,
        fontSize: `${56 / 1080 * width}px`,
        lineHeight: `${56 / 1080 * width}px`
      },
      text: {
        padding: `${24 / 1080 * width}px`,
        fontSize: `${108 / 1080 * width}px`,
        lineHeight: `${108 / 1080 * width}px`,
        marginTop: `${-24 / 1080 * width}px`
      }
    }
    const rootClass = `libe-insta-cover-display-slide`
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
      <div
        style={styles.titleAndText}
        className={`${rootClass}__title-and-text`}>
        <div
          style={styles.text}
          className={`${rootClass}__text`}>
          {text.value}
        </div>
        <div
          style={styles.title}
          className={`${rootClass}__title`}>
          <LibeIconSignature noBorders />
          <div
            style={styles.title}
            className={`${rootClass}__title-value`}>
            {title.value}
          </div>
        </div>
      </div>
    </Wrapper>
  }
}

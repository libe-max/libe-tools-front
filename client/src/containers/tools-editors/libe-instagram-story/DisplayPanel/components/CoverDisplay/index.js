import React, { Component } from 'react'

import LibeIconSignature from '../LibeIconSignature'

import Wrapper from './style'

export default class LibeInstaSlideCoverDisplay extends Component {
  render () {
    const { props } = this
    const { slide, dispatchEdition, width, height} = props
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
      <div
        style={styles.titleAndText}
        className={`${rootClass}__title-and-text`}>
        <div
          style={styles.text}
          className={`${rootClass}__text`}>
          {slide.text.value}
        </div>
        <div
          style={styles.title}
          className={`${rootClass}__title`}>
          <LibeIconSignature noBorders />
          <div
            style={styles.title}
            className={`${rootClass}__title-value`}>
            {slide.title.value}
          </div>
        </div>
      </div>
    </Wrapper>
  }
}

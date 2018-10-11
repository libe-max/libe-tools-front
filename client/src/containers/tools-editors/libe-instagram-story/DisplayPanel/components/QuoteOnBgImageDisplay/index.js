import React, { Component } from 'react'

import LibeIconSignature from '../LibeIconSignature'
import bgImagePlaceholder from '../../assets/bg-image-placeholder.svg'
import quoteSignIcon from '../../assets/libe-quote-sign.svg'

import Wrapper from './style'

export default class QuoteOnBgImageDisplay extends Component {
  render () {
    const { props } = this
    const { slide, width } = props
    const backgroundImages = slide.backgroundImages || []
    const text = slide.text || {}
    const title = slide.title || {}
    const styles = {
      quote: {
        fontSize: `${122 / 1080 * width}px`,
        lineHeight: `${142 / 1080 * width}px`,
        marginBottom: `${100 / 1080 * width}px`
      },
      quoteAuthor: {
        fontSize: `${50 / 1080 * width}px`,
        lineHeight: `${60 / 1080 * width}px`
      }
    }
    const rootClass = `libe-insta-quote-on-bg-image-display-slide`
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
      <div className={`${rootClass}__quote-block`}>
        <div className={`${rootClass}__quote-sign`}>
          <img src={quoteSignIcon} />
        </div>
        <div className={`${rootClass}__quote-and-author`}>
          <div
            style={styles.quote}
            className={`${rootClass}__quote`}>
            {title.value}
          </div>
          <div className={`${rootClass}__quote-author`}>
            {text.value}
          </div>
        </div>
      </div>
      <div className={`${rootClass}__icon-signature`}>
        <LibeIconSignature />
      </div>
    </Wrapper>
  }
}

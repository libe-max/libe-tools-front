import React, { Component } from 'react'

import { ThemeProvider } from 'styled-components'
import theme from './theme'

import libeQuoteSign from '../assets/libe-quote-sign.png'
import libeIcon from '../assets/libe-icon.png'

import Wrapper from './style'

export default class LibeInstaSlide extends Component {
  render () {
    const { props } = this
    const { display } = props
    const title = props.title || {}
    const text = props.text || {}
    const image = props.image || {}
    const backgroundImages = props.backgroundImages || []
    const contentPosition = props.contentPosition

    /* Assign classes */
    const r = `libe-insta-slide`
    const classes = [r, `${r}_${display}-display`]
    if (title.hidden) classes.push(`${r}_hidden-title`)
    if (contentPosition) classes.push(`${r}_content-position_${contentPosition}`)

    /* Display */
    return <ThemeProvider theme={theme}>
      <Wrapper
        className={classes.join(' ')}>

        {/* Background images */}
        <div
          data-property='background-images'
          className={`${r}__background-images`}>
          {backgroundImages.map((bgImg, i) => <div
            key={i}
            className={`${r}__background-image`}
            style={{
              height: `${100 / (backgroundImages.length || 1)}%`,
              backgroundImage: `url('${bgImg.src}')`,
              backgroundPosition: `${bgImg.position || 50}% ${bgImg.position || 50}%`
            }} />)}
        </div>

        {/* Cover display */}
        <div className={`${r}__cover-display`}>
          <div className={`${r}__icon-title`}>
            <span data-property='title'>
              {title.value || ''}
            </span>
          </div>
          <div className={`${r}__text-panel-wrapper`}>
            <div
              data-property='text'
              className={`${r}__text-panel ${r}__text-panel_big`}>
              {text.value || ''}
            </div>
          </div>
        </div>

        {/* Image and text display */}
        <div className={`${r}__image-and-text-display`}>
          <div
            data-property='image'
            className={`${r}__image`}>
            <img src={image.src} />
          </div>
          <div className={`${r}__title-and-text`}>
            <div
              data-property='title'
              className={`${r}__label-title`}>
              {title.value || ''}
            </div>
            <div
              data-property='text'
              className={`${r}__paragraph`}>
              {text.value || ''}
            </div>
          </div>
        </div>

        {/* Background image display */}
        <div className={`${r}__bg-image-display`} />

        {/* Quote on background image display */}
        <div className={`${r}__quote-on-bg-image-display`}>
          <div className={`${r}__quote-sign`}>
            <img src={libeQuoteSign} />
          </div>
          <div className={`${r}__quote-and-author`}>
            <div
              data-property='title'
              className={`${r}__quote`}>
              {title.value || ''}
            </div>
            <div
              data-property='text'
              className={`${r}__quote-author`}>
              {text.value || ''}
            </div>
          </div>
        </div>

        {/* Text on background image display */}
        <div className={`${r}__text-on-bg-image-display`}>
          <div
            data-property='text'
            className={`${r}__text-panel`}>
            {text.value || ''}
          </div>
        </div>

        {/* Icon signature */}
        <div className={`${r}__icon-signature`}>
          <img src={libeIcon} />
        </div>

      </Wrapper>
    </ThemeProvider>
  }
}

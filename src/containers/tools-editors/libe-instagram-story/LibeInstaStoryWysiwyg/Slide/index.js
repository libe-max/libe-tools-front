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

    /* Inner logic */
    const coverContentPosStyle = (() => {
      if (typeof parseInt(contentPosition, 10) !== 'number') return {}
      return {
        top: `${contentPosition / 100 * (1770 - 150) + 150}px`,
        transform: `translate(-50%, -${contentPosition}%)`
      }
    })()
    const nonCoverContentPosStyle = (() => {
      if (typeof parseInt(contentPosition, 10) !== 'number') return {}
      return {
        top: `${contentPosition / 100 * (1600 - 150) + 150}px`,
        transform: `translate(-50%, -${contentPosition}%)`
      }
    })()
    const textValue = text.value || ''
    const bgSplitTextValue = textValue.split(/<br\s?\/?>/i)
    const textValueWithBrs = []
    bgSplitTextValue.forEach((line, i) => {
      textValueWithBrs.push(line)
      if (i < bgSplitTextValue.length - 1) textValueWithBrs.push(<br key={`br${i}`} />)
    })

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
              backgroundImage: `url('${bgImg.src}')`,
              backgroundSize: `${bgImg.zoom || 1080}px`,
              backgroundPosition: `
                ${bgImg.position.x ? 100 - bgImg.position.x : 50}%
                ${bgImg.position.y || 50}%`
            }} />)}
        </div>

        {/* Cover display */}
        <div style={coverContentPosStyle} className={`${r}__cover-display`}>
          <div className={`${r}__icon-title`}>
            <span data-property='title'>
              {title.value || ''}
            </span>
          </div>
          <div className={`${r}__text-panel-wrapper`}>
            <div
              data-property='text'
              className={`${r}__text-panel ${r}__text-panel_big`}>
              {textValueWithBrs}
            </div>
          </div>
        </div>

        {/* Image and text display */}
        <div className={`${r}__image-and-text-display`}>
          <div
            data-property='image'
            className={`${r}__image`}>{
            image.src
              ? <img src={image.src} alt='Slide illustration' />
              : ''
          }</div>
          <div className={`${r}__title-and-text`}>
            <div
              data-property='title'
              className={`${r}__label-title`}>
              {title.value || ''}
            </div>
            <div
              data-property='text'
              className={`${r}__paragraph`}>
              {textValueWithBrs}
            </div>
          </div>
        </div>

        {/* Background image display */}
        <div className={`${r}__bg-image-display`} />

        {/* Quote on background image display */}
        <div className={`${r}__quote-on-bg-image-display`}>
          <div className={`${r}__quote-sign`}>
            <img src={libeQuoteSign} alt='Libé quote sign' />
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
              {textValueWithBrs}
            </div>
          </div>
        </div>

        {/* Text on background image display */}
        <div
          style={nonCoverContentPosStyle}
          className={`${r}__text-on-bg-image-display`}>
          <div
            data-property='text'
            className={`${r}__text-panel`}>
            {textValueWithBrs}
          </div>
        </div>

        {/* Icon signature */}
        <div className={`${r}__icon-signature`}>
          <img src={libeIcon} alt='Logo Libé' />
        </div>

      </Wrapper>
    </ThemeProvider>
  }
}

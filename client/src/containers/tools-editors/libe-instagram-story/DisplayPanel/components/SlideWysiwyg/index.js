import React, { Component } from 'react'

import { displays, displayPickerOptions } from '../../_config/'
import CoverDisplay from '../CoverDisplay/'
import ImgAndTextDisplay from '../ImgAndTextDisplay/'
import FullImageDisplay from '../FullImageDisplay/'
import QuoteOnBgImageDisplay from '../QuoteOnBgImageDisplay/'
import NoDisplay from '../NoDisplay/'

import Wrapper from './style'

export default class LibeInstaSlideWysiwyg extends Component {
  constructor () {
    super()
    this.state = {
      width: 0,
      height: 0
    }
    this.getSizes = this.getSizes.bind(this)
    this.cronSizeGetter = window.setInterval(this.getSizes, 1000)
    window.addEventListener('resize', this.getSizes)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.getSizes)
    window.clearInterval(this.cronSizeGetter)
  }

  componentDidMount () {
    this.getSizes()
  }

  render () {
    const { props } = this
    const { state } = this
    const { slide, dispatchEdition } = props
    const displayIsAllowed = displays.indexOf(slide.display) + 1
    const display = slide.display
      ? displayIsAllowed ? slide.display : `unallowed`
      : `no-display`
    /* Inner logic */
    const content = (() => {
      switch (display) {
        case 'cover':
          return <CoverDisplay {...props} {...state} />
        case 'image-and-text':
          return <ImgAndTextDisplay {...props} {...state} />
        case 'bg-image':
          return <FullImageDisplay {...props} {...state} />
        case 'quote-on-bg-image':
          return <QuoteOnBgImageDisplay {...props} {...state} />
        default:
          return <NoDisplay {...props} {...state} />
      }
    })()
    /* Assign classes to component */
    const classes = [`libe-insta-slide-wysiwyg`]
    classes.push(`libe-insta-slide-wysiwyg_${display}`)
    /* Display */
    return <Wrapper
      innerRef={node => this.$wrapper = node}
      className={classes.join(` `)}>
      {content}
    </Wrapper>
  }

  getSizes (msg) {
    const { state, $wrapper } = this
    if (!this.$wrapper) return
    if (
      $wrapper.offsetWidth === state.width
      && $wrapper.offsetHeight === state.height
    ) return
    return this.setState({
      width: this.$wrapper.offsetWidth,
      height: this.$wrapper.offsetHeight
    })
  }
}

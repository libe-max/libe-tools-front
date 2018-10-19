import React, { Component } from 'react'

import { displays } from '../../_config/'
import CoverDisplayWysiwyg from '../CoverDisplayWysiwyg/'
import ImgAndTextDisplayWysiwyg from '../ImgAndTextDisplayWysiwyg/'
import FullImageDisplayWysiwyg from '../FullImageDisplayWysiwyg/'
import QuoteOnBgImageDisplayWysiwyg from '../QuoteOnBgImageDisplayWysiwyg/'
import TextOnBgImageDisplayWysiwyg from '../TextOnBgImageDisplayWysiwyg/'
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
    const { slide } = props
    const displayIsAllowed = displays.indexOf(slide.display) + 1
    const display = slide.display
      ? displayIsAllowed ? slide.display : `unallowed`
      : `no-display`
    /* Inner logic */
    const content = (() => {
      switch (display) {
        case 'cover':
          return <CoverDisplayWysiwyg {...props} {...state} />
        case 'image-and-text':
          return <ImgAndTextDisplayWysiwyg {...props} {...state} />
        case 'bg-image':
          return <FullImageDisplayWysiwyg {...props} {...state} />
        case 'quote-on-bg-image':
          return <QuoteOnBgImageDisplayWysiwyg {...props} {...state} />
        case 'text-on-bg-image':
          return <TextOnBgImageDisplayWysiwyg {...props} {...state} />
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

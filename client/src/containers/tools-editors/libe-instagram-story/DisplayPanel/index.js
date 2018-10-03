import React, { Component } from 'react'

import Button from '../../../../components/buttons/Button'
import BlockTitle from '../../../../components/text-levels/BlockTitle'
import Paragraph from '../../../../components/text-levels/Paragraph'
import LibeInstaSlideWysiwyg from './components/LibeInstaSlideWysiwyg/'

import Wrapper from './style'

export default class LibeInstaStoryWysiwyg extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeSlide: -1,
      pLatestSettings: [],
      loading: props.loading
    }
    this.addNewSlide = this.addNewSlide.bind(this)
    this.activatePrevSlide = this.activatePrevSlide.bind(this)
    this.activateNextSlide = this.activateNextSlide.bind(this)
    this.activateSlide = this.activateSlide.bind(this)
    this.constrainProportions = this.constrainProportions.bind(this)
    this.getOffsetForCentering = this.getOffsetForCentering.bind(this)
    this.centerSlide = this.centerSlide.bind(this)
    this.deleteSlide = this.deleteSlide.bind(this)
    window.addEventListener('resize', () => this.constrainProportions())
    window.addEventListener('resize', () => this.centerSlide())
  }

  componentWillUnmount () {
    window.removeEventListener('resize', () => this.constrainProportions())
    window.removeEventListener('resize', () => this.centerSlide())
  }
  componentDidMount () {
    const { latestSettings } = this.props
    const slides = latestSettings.slides || []
    this.constrainProportions()
    if (slides.length) this.centerSlide()
    else this.centerSlide(-1)
  }
  componentDidUpdate () {
    const { latestSettings } = this.props
    const slides = latestSettings.slides || []
    this.constrainProportions()
    if (slides.length) this.centerSlide()
    else this.centerSlide(-1)
  }
  static getDerivedStateFromProps (props, state) {
    const { latestSettings } = props
    const { pLatestSettings } = state
    const slides = latestSettings.slides || []
    const pSlides = pLatestSettings.slides || []
    const newState = {
      ...state,
      loading: props.loading
    }
    if (state.loading && !props.loading) {
      if (slides.length) newState.activeSlide = slides.length - 1
      else newState.activeSlide = undefined
    } else if (!state.loading && !props.loading) {
      if (slides.length > pSlides.length) newState.activeSlide = slides.length - 1
    }
    newState.pLatestSettings = props.latestSettings
    return newState
  }

  render () {
    const props = this.props
    const state = this.state

    /* Inner logic */
    const activeSlide = state.activeSlide
    const latestSettings = props.latestSettings
    const slides = latestSettings.slides || []
    const slidesDom = slides.map((slide, i) => {
      const onClick = (i !== activeSlide)
        ? e => this.activateSlide(i)
        : null
      const classes = ['libe-insta-story-wysiwyg__slide']
      if (i === activeSlide) classes.push('libe-insta-story-wysiwyg__slide_active')
      return <div
        key={i}
        onClick={onClick}
        className={classes.join(' ')}>
        <LibeInstaSlideWysiwyg {...slide} />
        <div className="libe-insta-story-wysiwyg__delete-slide">
          <Button
            onClick={e => {
              e.stopPropagation()
              this.deleteSlide(i)
            }}
            icon='/images/trash-icon.svg' />
        </div>
      </div>
    })

    /* Assign classes to component */
    const classes = [`libe-insta-story-wysiwyg`]
    if (!slides.length) classes.push(`libe-insta-story-wysiwyg_no-slides`)

    /* Display */
    return <Wrapper
      className={classes.join(' ')}
      innerRef={node => this.$wrapper = node}>
      <div className='libe-insta-story-wysiwyg__slide-controls'>
        <div className='libe-insta-story-wysiwyg__slides-navigation'>
          <div className={[
            "libe-insta-story-wysiwyg__turn-page",
            "libe-insta-story-wysiwyg__turn-page_prev"
            ].join(' ')}>
            <Button
              icon='/images/back-arrow-icon.svg'
              disabled={activeSlide === 0}
              onClick={this.activatePrevSlide} />
          </div>
          <div className="libe-insta-story-wysiwyg__active-page">
            <BlockTitle>{
              activeSlide !== undefined
              && activeSlide !== -1
                ? `Page ${activeSlide + 1}`
                : `Nouvelle Story`
            }</BlockTitle>
          </div>
          <div className={[
            "libe-insta-story-wysiwyg__turn-page",
            "libe-insta-story-wysiwyg__turn-page_next"
            ].join(' ')}>
            <Button
              icon='/images/forward-arrow-icon.svg'
              disabled={activeSlide === slides.length - 1}
              onClick={this.activateNextSlide} />
          </div>
        </div>
        <div className='libe-insta-story-wysiwyg__slide-display'>
          <Button link minor>Quel display ?</Button>
        </div>
      </div>
      <div className='libe-insta-story-wysiwyg__slides'>
        <div
          ref={node => this.$spacer = node}
          className='libe-insta-story-wysiwyg__slides-spacer'>
        </div>
        {slidesDom}
        <div
          onClick={this.addNewSlide}
          className='libe-insta-story-wysiwyg__new-slide'>
          <Button link>+ Nouvelle page</Button>
        </div>
      </div>
    </Wrapper>
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Add a new slide
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  addNewSlide () {
    const props = this.props
    const latestSettings = props.latestSettings
    const slides = latestSettings.slides || []
    props.dispatchEdition('slides', [...slides, {}])
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Activate prev slide, next slide, or slide n
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  activatePrevSlide () {
    const activeSlide = this.state.activeSlide
    this.activateSlide(activeSlide - 1)
  }

  activateNextSlide () {
    const activeSlide = this.state.activeSlide
    this.activateSlide(activeSlide + 1)
  }

  activateSlide (n = null) {
    const props = this.props
    const { latestSettings } = props
    const { slides } = latestSettings || []
    if (n === null) return
    if (n >= slides.length) return
    if (n < -1) return
    this.setState({ activeSlide: n })
    this.centerSlide(n)
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Ensure slides are 9 * 16
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  constrainProportions () {
    if (!this.$wrapper) return null
    const $slidesWrapper = this.$wrapper.querySelector('.libe-insta-story-wysiwyg__slides')
    const height = $slidesWrapper.clientHeight
    const constrainedWidth = Math.floor(9 * height / 16)
    this.$wrapper
      .querySelectorAll('.libe-insta-story-wysiwyg__slide')
      .forEach(slide => slide.style.width = `${constrainedWidth}px`)
    this.$wrapper
      .querySelector('.libe-insta-story-wysiwyg__new-slide')
      .style.width = `${constrainedWidth}px`
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Calculate spacer margin in order to center slides n
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  getOffsetForCentering (n = this.state.activeSlide) {
    if (!n && n !== 0) return null
    if (!this.$wrapper) return null
    if (!this.$spacer) return null
    const spacer = this.$spacer
    const slide = n === -1
      ? this.$wrapper.querySelector('.libe-insta-story-wysiwyg__new-slide')
      : this.$wrapper.querySelectorAll('.libe-insta-story-wysiwyg__slide')[n]
    if (!slide) return null
    const spacerStyle = spacer.currentStyle || window.getComputedStyle(spacer)
    const wrapperWidth = this.$wrapper.clientWidth
    const spacerOffset = parseFloat(spacerStyle.marginLeft)
    const slideWidth = slide.offsetWidth
    const slideOffset = slide.offsetLeft - spacerOffset
    const targetOffset = (wrapperWidth - slideWidth) / 2
    const offsetDiff = targetOffset - slideOffset
    return offsetDiff
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Center slide n
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  centerSlide(n = this.state.activeSlide) {
    const target = this.getOffsetForCentering(n)
    if (target === null) return
    this.$spacer.style.marginLeft = `${target}px`
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Delete slide n
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  deleteSlide(n = undefined) {
    if (n === undefined) return
    if (!window.confirm('Supprimer cette page ?')) return
    const props = this.props
    const state = this.state
    const { latestSettings } = props
    const { slides } = latestSettings
    const { activeSlide } = state
    const newSlides = [
      ...slides.slice(0, n),
      ...slides.slice(n + 1)
    ]
    props.dispatchEdition('slides', newSlides)
    if (!newSlides.length) return this.activateSlide(-1)
    if (n === 0) return this.activateSlide(0)
    if (n === newSlides.length) return this.activateSlide(newSlides.length - 1)
    if (activeSlide < n) return this.activateSlide(activeSlide)
    if (activeSlide === n) return this.activateSlide(activeSlide + 1)
    if (activeSlide > n) this.activateSlide(activeSlide - 1)
  }


}

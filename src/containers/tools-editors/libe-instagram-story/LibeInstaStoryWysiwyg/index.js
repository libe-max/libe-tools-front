import React, { Component } from 'react'

import { displays, displayPickerOptions } from './utils/'

import Button from '../../../../components/buttons/Button'
import BlockTitle from '../../../../components/text-levels/BlockTitle'
import SelectList from '../../../../components/inputs/SelectList'
import SlideWysiwyg from './SlideWysiwyg/'

import Wrapper from './style'

export default class LibeInstaStoryWysiwyg extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeSlidePos: -1,
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
    this.changeDisplayOnActiveSlide = this.changeDisplayOnActiveSlide.bind(this)
    this.dispatchEditionInSlide = this.dispatchEditionInSlide.bind(this)
    window.addEventListener('resize', () => this.constrainProportions())
    window.addEventListener('resize', () => this.centerSlide())
  }

  componentWillUnmount () {
    window.removeEventListener('resize', () => this.constrainProportions())
    window.removeEventListener('resize', () => this.centerSlide())
  }

  componentDidMount () {
    const { latestSettings } = this.props
    const slides = latestSettings.slides || []
    this.constrainProportions()
    if (slides.length) this.centerSlide()
    else this.centerSlide(-1)
  }

  componentDidUpdate () {
    const { latestSettings } = this.props
    const slides = latestSettings.slides || []
    this.constrainProportions()
    if (slides.length) this.centerSlide()
    else this.centerSlide(-1)
  }

  static getDerivedStateFromProps (props, state) {
    const { latestSettings } = props
    const { pLatestSettings } = state
    const slides = latestSettings.slides || []
    const pSlides = pLatestSettings.slides || []
    const newState = {
      ...state,
      loading: props.loading
    }
    if (state.loading && !props.loading) {
      if (slides.length) newState.activeSlidePos = slides.length - 1
      else newState.activeSlidePos = undefined
    } else if (!state.loading && !props.loading) {
      if (slides.length > pSlides.length) newState.activeSlidePos = slides.length - 1
    }
    newState.pLatestSettings = props.latestSettings
    return newState
  }

  render () {
    const props = this.props
    const state = this.state
    
    /* Inner logic */
    const activeSlidePos = state.activeSlidePos
    const latestSettings = props.latestSettings
    const slides = latestSettings.slides || []

    /* Params for the slide display selector */
    const activeSlide = slides[activeSlidePos] || {}
    const activeSlideDisplay = activeSlide.display
    const displayExists = displays.indexOf(activeSlideDisplay) + 1
    if (this.$displayPicker) {
      this.$displayPicker.input.value = displayExists
        ? activeSlideDisplay
        : 'placeholder'
    }

    /* Assign classes to component */
    const rootClass = `libe-insta-story-wysiwyg`
    const classes = [rootClass]
    if (!slides.length) classes.push(`${rootClass}_no-slides`)

    /* Dom for each slide of the story */
    const slidesDom = slides.map((slide, i) => {
      const onClick = (i !== activeSlidePos) ? e => this.activateSlide(i) : null
      const classes = [`${rootClass}__slide`]
      if (i === activeSlidePos) classes.push(`${rootClass}__slide_active`)
      return <div
        key={i}
        onClick={onClick}
        className={classes.join(' ')}>
        <SlideWysiwyg
          slide={slide}
          dispatchEdition={this.dispatchEditionInSlide(i)} />
        <div className={`${rootClass}__delete-slide`}>
          <Button
            onClick={e => {
              e.stopPropagation()
              this.deleteSlide(i)
            }}
            icon='/images/trash-icon.svg' />
        </div>
        <div className={`${rootClass}__blocker`} />
      </div>
    })

    /* Display */
    return <Wrapper
      className={classes.join(' ')}
      innerRef={node => { this.$wrapper = node }}>
      <div className={`${rootClass}__slide-controls`}>
        <div className={`${rootClass}__slides-navigation`}>
          <div className={[
            `${rootClass}__turn-page`,
            `${rootClass}__turn-page_prev`].join(' ')}>
            <Button
              icon='/images/back-arrow-icon.svg'
              disabled={activeSlidePos === 0}
              onClick={this.activatePrevSlide} />
          </div>
          <div className={`${rootClass}__active-page`}>
            <BlockTitle>{
              activeSlidePos !== undefined &&
              activeSlidePos !== -1
                ? `Page ${activeSlidePos + 1}`
                : `Nouvelle Story`
            }</BlockTitle>
          </div>
          <div className={[
            `${rootClass}__turn-page`,
            `${rootClass}__turn-page_next`].join(' ')}>
            <Button
              icon='/images/forward-arrow-icon.svg'
              disabled={activeSlidePos === slides.length - 1}
              onClick={this.activateNextSlide} />
          </div>
        </div>
        <div className={`${rootClass}__slide-display`}>
          <SelectList
            options={displayPickerOptions}
            ref={node => { this.$displayPicker = node }}
            onChange={this.changeDisplayOnActiveSlide} />
        </div>
      </div>
      <div className={`${rootClass}__slides`}>
        <div
          ref={node => { this.$spacer = node }}
          className={`${rootClass}__slides-spacer`} />
        {!props.loading ? slidesDom : ''}
        <div
          onClick={this.addNewSlide}
          className={`${rootClass}__new-slide`}>
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
    const slides = latestSettings.slides || []
    props.dispatchEdition('slides', [...slides, {}])
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Activate prev slide, next slide, or slide n
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  activatePrevSlide () {
    const activeSlidePos = this.state.activeSlidePos
    this.activateSlide(activeSlidePos - 1)
  }

  activateNextSlide () {
    const activeSlidePos = this.state.activeSlidePos
    this.activateSlide(activeSlidePos + 1)
  }

  activateSlide (n = null) {
    const props = this.props
    const { latestSettings } = props
    const { slides } = latestSettings || []
    if (n === null) return
    if (n >= slides.length) return
    if (n < -1) return
    this.setState({ activeSlidePos: n })
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
    const width = Math.floor(9 * height / 16)
    this.$wrapper
      .querySelectorAll('.libe-insta-story-wysiwyg__slide')
      .forEach(slide => { slide.style.width = `${width}px` })
    this.$wrapper
      .querySelector('.libe-insta-story-wysiwyg__new-slide')
      .style.width = `${width}px`
    return { width, height }
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Calculate spacer margin in order to center slides n
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  getOffsetForCentering (n = this.state.activeSlidePos) {
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
  centerSlide (n = this.state.activeSlidePos) {
    const target = this.getOffsetForCentering(n)
    if (target === null) return
    this.$spacer.style.marginLeft = `${target}px`
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Delete slide n
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  deleteSlide (n = undefined) {
    if (n === undefined) return
    if (!window.confirm('Supprimer cette page ?')) return
    const props = this.props
    const state = this.state
    const { latestSettings } = props
    const { slides } = latestSettings
    const { activeSlidePos } = state
    const newSlides = [
      ...slides.slice(0, n),
      ...slides.slice(n + 1)
    ]
    props.dispatchEdition('slides', newSlides)
    if (!newSlides.length) return this.activateSlide(-1)
    if (n === 0) return this.activateSlide(0)
    if (n === newSlides.length) return this.activateSlide(newSlides.length - 1)
    if (activeSlidePos < n) return this.activateSlide(activeSlidePos)
    if (activeSlidePos === n) return this.activateSlide(activeSlidePos + 1)
    if (activeSlidePos > n) this.activateSlide(activeSlidePos - 1)
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Handle changes on the display select list
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  changeDisplayOnActiveSlide (e) {
    const { activeSlidePos } = this.state
    const { dispatchEdition, latestSettings } = this.props
    const { slides } = latestSettings
    const { value } = e.target
    const newSlide = slides[activeSlidePos]
    newSlide.display = value
    const newSlides = [
      ...slides.slice(0, activeSlidePos),
      newSlide,
      ...slides.slice(activeSlidePos + 1)
    ]
    return dispatchEdition('slides', newSlides)
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *
   *  Dispatch edition inside a given slide
   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  dispatchEditionInSlide (n) {
    return (key, val) => {
      const { latestSettings, dispatchEdition } = this.props
      const { slides } = latestSettings
      const newSlide = slides[n]
      newSlide[key] = val
      const newSlides = [
        ...slides.slice(0, n),
        newSlide,
        ...slides.slice(n + 1)
      ]
      return dispatchEdition('slides', newSlides)
    }
  }
}

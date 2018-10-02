import React, { Component } from 'react'

import Button from '../../../../components/buttons/Button'
import BlockTitle from '../../../../components/text-levels/BlockTitle'
import Paragraph from '../../../../components/text-levels/Paragraph'
import LibeInstaSlideWysiwyg from './components/LibeInstaSlideWysiwyg/'

import Wrapper from './style'

const story = {slides: [{/* Page 1 */display: 'cover',title: {value: 'Kim-Trump',size: 16},text: {value: 'Un an de loopings diplomatiques',size: 16},background_images: [{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',position: [50, 50]}, {url: 'https://www.3dpetproducts.com/wp-content/uploads/2012/08/MallardDuck04.jpg',position: [50, 50]}]}, {/* Page 2 */display: 'image-and-text',title: {value: 'Le 9 février 2018',size: 16},text: {value: 'Des représentants des deux Corées franchissent la zone démilitarisée pour participer à la cérémonie d’ouverture des JO de Pyeongchang.',size: 16},image: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',position: [50, 50]}}, {/* Page 3 */display: 'quote-on-bg-image',text: {value: 'On vous pose une question sur Harvey, vous répondez, ça finit en titre',size: 16},name: {value: 'Cate Blanchett',size: 16},background_images: [{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',position: [50, 50]}]}, {/* Page 4 */display: 'full-image',background_images: [{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',position: [50, 50]}]}, {/* Page 5 */display: 'text-on-bg-image',text: {value: 'Notre photographe Olivier Metzger toujours sur la brèche',size: 16},background_images: [{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',position: [50, 50]}]}]}

export default class LibeInstaStoryWysiwyg extends Component {
  constructor () {
    super()
    this.state = {
      movingSlides: false,
      activeSlide: 0
    }
    this.constrainProportions = this.constrainProportions.bind(this)
    this.getOffsetForCentering = this.getOffsetForCentering.bind(this)
    this.centerSlide = this.centerSlide.bind(this)
    this.smoothCenterSlides = this.smoothCenterSlides.bind(this)
    this.trySmoothCenterSlides = this.trySmoothCenterSlides.bind(this)
    window.addEventListener(
      'resize',
      this.constrainProportions
    )
  }

  componentWillUnmount () {
    window.removeEventListener(
      'resize',
      this.constrainProportions
    )
  }

  componentDidMount () {
    this.constrainProportions()
  }

  constrainProportions () {
    if (!this.$wrapper) return null
    const $slidesWrapper = this.$wrapper
      .querySelector('.libe-insta-story-wysiwyg__slides')
    const height = $slidesWrapper.clientHeight
    const constrainedWidth = 9 * height / 16
    this.$wrapper
      .querySelectorAll('.libe-insta-story-wysiwyg__slide')
      .forEach(slide => {
        slide.style.width = `${constrainedWidth}px`
      })
    this.centerSlide()
  }

  getOffsetForCentering (n = this.state.activeSlide) {
    if (!n && n !== 0) return null
    if (!this.$wrapper) return null
    if (!this.$spacer) return null
    const spacer = this.$spacer
    const slide = this.$wrapper.querySelectorAll('.libe-insta-story-wysiwyg__slide')[n]
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

  centerSlide(n = this.state.activeSlide) {
    const target = this.getOffsetForCentering(n)
    if (target === null) return
    this.$spacer.style.marginLeft = `${target}px`
    this.setState({ activeSlide: n })
  }

  trySmoothCenterSlides (n = this.state.activeSlide) {
    const state = this.state
    if (state.movingSlides) return
    this.smoothCenterSlides(n)
  }

  smoothCenterSlides (n = this.state.activeSlide, i = 0, steps = []) {
    if (!this.$wrapper) return
    const time = 500
    const msIncrement = 1000 / 60
    const nbSteps = Math.floor(time / msIncrement)
    if (i === 0) {
      this.setState({ movingSlides: true })
      const spacer = this.$spacer
      const spacerStyle = spacer.currentStyle || window.getComputedStyle(spacer)
      const origin = parseFloat(spacerStyle.marginLeft)
      const target = this.getOffsetForCentering(n)
      if (target === null) return
      const diff = target - origin
      const steps = new Array(nbSteps + 1).fill(null).map((e, stepNb) => {
        const advancement = Math.sin(Math.PI / 2 * stepNb / nbSteps)
        const step = diff * advancement
        return origin + step
      })
      this.smoothCenterSlides(n, (i + 1), steps)
    } else if (i < nbSteps) {
      this.$spacer.style.marginLeft = `${steps[i]}px`
      window.setTimeout(
        () => {this.smoothCenterSlides(n, i + 1, steps)},
        msIncrement
      )
    } else {
      this.$spacer.style.marginLeft = `${steps[i]}px`
      this.setState({
        movingSlides: false,
        activeSlide: n
      })
    }
  }

  render () {
    console.log(this.state)
    const latestSettings = Object.assign({}, this.props.latestSettings, { slides: story.slides })
    const props = Object.assign({}, this.props, { latestSettings })
    const slides = latestSettings.slides
    
    const classes = [`libe-insta-story-wysiwyg`]
    return <Wrapper
      onClick={() => this.trySmoothCenterSlides(Math.floor(Math.random() * 5))}
      className={classes.join(' ')}
      innerRef={node => this.$wrapper = node}>
      <div className='libe-insta-story-wysiwyg__slide-controls'>
        <div className='libe-insta-story-wysiwyg__slides-navigation'>
          <Button link minor>Go prev</Button>
          <BlockTitle>Page 2</BlockTitle>
          <Button link minor>Go next</Button>
        </div>
        <div className='libe-insta-story-wysiwyg__slide-display'>
          <Button link minor>Quel display ?</Button>
        </div>
      </div>
      <div className='libe-insta-story-wysiwyg__slides'>
        <div
          ref={node => this.$spacer = node}
          className='libe-insta-story-wysiwyg__slides-spacer' />
        {slides.map((slide, i) => <div className='libe-insta-story-wysiwyg__slide' key={i}>
          Slide {i + 1}
          {/*<LibeInstaSlideWysiwyg {...slide} nb={i} />*/}
        </div>)}
      </div>
    </Wrapper>
  }
}

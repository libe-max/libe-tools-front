import React, { Component } from 'react'

import { displays } from '../utils/'
import Slide from '../Slide'
import WysiwygEditor from '../../../../../components/logical/WysiwygEditor'
import TextInput from '../../../../../components/inputs/TextInput'
import RangeInput from '../../../../../components/inputs/RangeInput'
import bgImgPlaceholder from '../assets/bg-image-placeholder.svg'
import imgPlaceholder from '../assets/image-placeholder.svg'

import Wrapper from './style'

export default class LibeInstaSlideWysiwyg extends Component {
  constructor () {
    super()
    this.state = { editorsAreReady: false }
    this.inputs = {}
    this.editors = []
    this.editorsRefs = []
    this.resize = this.resize.bind(this)
    this.initEditors = this.initEditors.bind(this)
    this.populateFields = this.populateFields.bind(this)
    this.unactivateAllEditors = this.unactivateAllEditors.bind(this)
    this.ornamentSlideTemplate = this.ornamentSlideTemplate.bind(this)
    this.interval = window.setInterval(this.resize, 2000)
    window.addEventListener('resize', this.resize)
  }

  componentDidMount () {
    window.setTimeout(this.resize, 50)
    this.initEditors()
    this.ornamentSlideTemplate()
  }

  componentDidUpdate () {
    window.setTimeout(this.resize(), 50)
    this.populateFields()
    this.ornamentSlideTemplate()
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
    window.removeEventListener('resize', this.resize)
  }

  ornamentSlideTemplate () {
    const { $wrapper, props : { slide } } = this
    if (!slide.display) return
    const bgStyle = $wrapper.querySelector('.libe-insta-slide__background-images').style
    // Display a background image placeholder
    if (!slide.backgroundImages
      || (slide.backgroundImages && !slide.backgroundImages[0])
      || (slide.backgroundImages && slide.backgroundImages[0] && !slide.backgroundImages[0].src)
    ) bgStyle.backgroundImage = `url(${bgImgPlaceholder})`
    else bgStyle.backgroundImage = ''
    // Display an image placeholder
    const imgStyle = $wrapper.querySelector(`.libe-insta-slide__image-and-text-display .libe-insta-slide__image`).style
    if (!slide.image
      || (slide.image && !slide.image.src)
    ) {
      imgStyle.width = '780px'
      imgStyle.height = '400px'
      imgStyle.backgroundImage = `url(${imgPlaceholder})`
    } else {
      imgStyle.width = ''
      imgStyle.height = ''
      imgStyle.backgroundColor = ''
    }
    // Title placeholder
    const coverDisplayTitle = $wrapper.querySelector(`.libe-insta-slide__cover-display .libe-insta-slide__icon-title span`)
    const imgAndTxtDisplayTitle = $wrapper.querySelector(`.libe-insta-slide__image-and-text-display .libe-insta-slide__label-title`)
    const quoteOnBgDisplayTitle = $wrapper.querySelector(`.libe-insta-slide__quote-on-bg-image-display .libe-insta-slide__quote`)
    if (!slide.title || (slide.title && !slide.title.value)) {
      coverDisplayTitle.innerHTML = `<span style="color: white; opacity: 0.5;">Titre</span>`
      imgAndTxtDisplayTitle.innerHTML = `<span style="color: white; opacity: 0.5;">Titre</span>`
      quoteOnBgDisplayTitle.innerHTML = `<span style="color: #999999;">Texte de la citation</span>`
    }
    // Text placeholder
    const coverDisplayText = $wrapper.querySelector(`.libe-insta-slide__cover-display .libe-insta-slide__text-panel`)
    const imgAndTxtDisplayText = $wrapper.querySelector(`.libe-insta-slide__image-and-text-display .libe-insta-slide__paragraph`)
    const quoteOnBgDisplayText = $wrapper.querySelector(`.libe-insta-slide__quote-on-bg-image-display .libe-insta-slide__quote-author`)
    const textOnBgDisplayText = $wrapper.querySelector(`.libe-insta-slide__text-on-bg-image-display .libe-insta-slide__text-panel`)
    if (!slide.text || (slide.text && !slide.text.value)) {
      coverDisplayText.innerHTML = `<span style="color: #999999">Texte de la slide</span>`
      imgAndTxtDisplayText.innerHTML = `<span style="color: #999999">Texte de la slide</span>`
      quoteOnBgDisplayText.innerHTML = `<span style="color: #999999">Auteur de la citation</span>`
      textOnBgDisplayText.innerHTML = `<span style="color: #999999">Texte de la slide</span>`
    }
  }

  render () {
    const { props } = this
    const { slide } = props
    const displayIsAllowed = displays.indexOf(slide.display) + 1
    const display = slide.display
      ? displayIsAllowed ? slide.display : `unallowed`
      : `no-display`

    /* Assign classes to component */
    const r = 'libe-insta-slide-wysiwyg'
    const classes = [r]
    classes.push(`${r}_${display}`)

    /* Inner logic */
    const { editors } = this

    /* Display */
    return <Wrapper
      innerRef={node => { this.$wrapper = node }}
      className={classes.join(` `)}>
      <div className={`${r}__slide`}>
        <Slide {...slide} />
      </div>
      <div className={`${r}__editors`}>
        {editors}
      </div>
      <div className={`${r}__placeholder`} />
    </Wrapper>
  }

  initEditors () {
    const { props: { slide, dispatchEdition } } = this
    const $ = q => this.$wrapper.querySelector(q)

    const bgSrcDispatcher = e => {
      const newVal = slide.backgroundImages
      && slide.backgroundImages[0]
        ? { ...slide.backgroundImages[0], src: e.target.value }
        : { position: 50, src: e.target.value }
      return dispatchEdition('backgroundImages', [newVal])
    }
    const bgPosDispatcher = e => {
      const newVal = slide.backgroundImages
      && slide.backgroundImages[0]
        ? { ...slide.backgroundImages[0], position: e.target.value }
        : { src: '', position: e.target.value }
      return dispatchEdition('backgroundImages', [newVal])
    }
    const imgSrcDispatcher = e => {
      const newVal = { ...slide.image, src: e.target.value }
      return dispatchEdition('image', newVal)
    }
    const titleDispatcher = e => {
      const newVal = { ...slide.title, value: e.target.value }
      return dispatchEdition('title', newVal)
    }
    const textDispatcher = e => {
      const newVal = { ...slide.text, value: e.target.value }
      return dispatchEdition('text', newVal)
    }

    this.editors = [<div
      key="Background image editor"
      className="libe-insta-slide-wysiwyg__editor">
      <WysiwygEditor
        title="Image de fond"
        onActivate={this.unactivateAllEditors}
        innerRef={node => this.editorsRefs.push(node)}
        domRoot={$(`.libe-insta-slide__background-images`)}>
        <TextInput
          blurOnEnter
          label="Adresse de l'image"
          ref={node => this.inputs.bgImgSrc = node}
          placeholder="Tapez ici l'url de l'image"
          onChange={bgSrcDispatcher} />
        <RangeInput
          label='Position'
          ref={node => this.inputs.bgImgPos = node}
          onChange={bgPosDispatcher} />
      </WysiwygEditor>
    </div>,

    <div
      key="Cover display / title editor"
      className="libe-insta-slide-wysiwyg__editor">
      <WysiwygEditor
        title="Titre de la slide"
        onActivate={this.unactivateAllEditors}
        innerRef={node => this.editorsRefs.push(node)}
        domRoot={$(`.libe-insta-slide__cover-display .libe-insta-slide__icon-title`)}>
        <TextInput
          blurOnEnter
          placeholder='Tapez ici le titre de la slide'
          ref={node => this.inputs.coverDisplayTitle = node}
          onChange={titleDispatcher} />
      </WysiwygEditor>
    </div>,

    <div
      key="Cover display / text editor"
      className="libe-insta-slide-wysiwyg__editor">
      <WysiwygEditor
        title="Texte de la slide"
        onActivate={this.unactivateAllEditors}
        innerRef={node => this.editorsRefs.push(node)}
        domRoot={$(`.libe-insta-slide__cover-display .libe-insta-slide__text-panel`)}>
        <TextInput
          blurOnEnter
          placeholder='Tapez ici le texte de la slide'
          ref={node => this.inputs.coverDisplayText = node}
          onChange={textDispatcher} />
      </WysiwygEditor>
    </div>,

    <div
      key="Image and text display / image editor"
      className="libe-insta-slide-wysiwyg__editor">
      <WysiwygEditor
        title="Image de la slide"
        onActivate={this.unactivateAllEditors}
        innerRef={node => this.editorsRefs.push(node)}
        domRoot={$(`.libe-insta-slide__image-and-text-display .libe-insta-slide__image`)}>
        <TextInput
          blurOnEnter
          label="Adresse de l'image"
          ref={node => this.inputs.imgAndTxtDisplayImgSrc = node}
          placeholder="Tapez ici l'url de l'image"
          onChange={imgSrcDispatcher} />
      </WysiwygEditor>
    </div>,

    <div
      key="Image and text display / title editor"
      className="libe-insta-slide-wysiwyg__editor">
      <WysiwygEditor
        title="Titre de la slide"
        onActivate={this.unactivateAllEditors}
        innerRef={node => this.editorsRefs.push(node)}
        domRoot={$(`.libe-insta-slide__image-and-text-display .libe-insta-slide__label-title`)}>
        <TextInput
          blurOnEnter
          placeholder='Tapez ici le titre de la slide'
          ref={node => this.inputs.imgAndTxtDisplayTitle = node}
          onChange={titleDispatcher} />
      </WysiwygEditor>
    </div>,

    <div
      key="Image and text display / text editor"
      className="libe-insta-slide-wysiwyg__editor">
      <WysiwygEditor
        title="Texte de la slide"
        onActivate={this.unactivateAllEditors}
        innerRef={node => this.editorsRefs.push(node)}
        domRoot={$(`.libe-insta-slide__image-and-text-display .libe-insta-slide__paragraph`)}>
        <TextInput
          blurOnEnter
          placeholder='Tapez ici le texte de la slide'
          ref={node => this.inputs.imgAndTxtDisplayText = node}
          onChange={textDispatcher} />
      </WysiwygEditor>
    </div>,

    <div
      key="Quote on bg / quote editor"
      className="libe-insta-slide-wysiwyg__editor">
      <WysiwygEditor
        title="Texte de la citation"
        onActivate={this.unactivateAllEditors}
        innerRef={node => this.editorsRefs.push(node)}
        domRoot={$(`.libe-insta-slide__quote-on-bg-image-display .libe-insta-slide__quote`)}>
        <TextInput
          blurOnEnter
          placeholder='Tapez ici la citation'
          ref={node => this.inputs.quoteOnBgDisplayTitle = node}
          onChange={titleDispatcher} />
      </WysiwygEditor>
    </div>,

    <div
      key="Quote on bg / author editor"
      className="libe-insta-slide-wysiwyg__editor">
      <WysiwygEditor
        title="Auteur de la citation"
        onActivate={this.unactivateAllEditors}
        innerRef={node => this.editorsRefs.push(node)}
        domRoot={$(`.libe-insta-slide__quote-on-bg-image-display .libe-insta-slide__quote-author`)}>
        <TextInput
          blurOnEnter
          placeholder="Tapez ici l'auteur de la citation"
          ref={node => this.inputs.quoteOnBgDisplayText = node}
          onChange={textDispatcher} />
      </WysiwygEditor>
    </div>,

    <div
      key="Text on bg / text editor"
      className="libe-insta-slide-wysiwyg__editor">
      <WysiwygEditor
        title="Texte de la slide"
        onActivate={this.unactivateAllEditors}
        innerRef={node => this.editorsRefs.push(node)}
        domRoot={$(`.libe-insta-slide__text-on-bg-image-display .libe-insta-slide__text-panel`)}>
        <TextInput
          blurOnEnter
          placeholder="Tapez ici le texte de la slide"
          ref={node => this.inputs.textOnBgDisplayText = node}
          onChange={textDispatcher} />
      </WysiwygEditor>
    </div>]

    this.setState({ editorsAreReady: true })
  }

  populateFields () {
    const { props: { slide } } = this
    // Bg image fields
    if (slide.backgroundImages && slide.backgroundImages[0]) {
      this.inputs.bgImgSrc.setValue(slide.backgroundImages[0].src)
      this.inputs.bgImgPos.setValue(slide.backgroundImages[0].position)  
    }
    // Title fields
    if (slide.title) {
      this.inputs.coverDisplayTitle.setValue(slide.title.value || '')
      this.inputs.imgAndTxtDisplayTitle.setValue(slide.title.value || '')
      this.inputs.quoteOnBgDisplayTitle.setValue(slide.title.value || '')
    }
    // Text fields
    if (slide.text) {
      this.inputs.coverDisplayText.setValue(slide.text.value || '')
      this.inputs.imgAndTxtDisplayText.setValue(slide.text.value || '')
      this.inputs.quoteOnBgDisplayText.setValue(slide.text.value || '')
      this.inputs.textOnBgDisplayText.setValue(slide.text.value || '')
    }
    // Image fields
    if (slide.image) {
      this.inputs.imgAndTxtDisplayImgSrc.setValue(slide.image.src || '')
    }
  }

  resize () {
    const slideWidth = 1080
    const slideHeight = 1920
    const wrapperWidth = this.$wrapper.offsetWidth
    const wrapperHeight = this.$wrapper.offsetHeight
    const scX = wrapperWidth / slideWidth
    const scY = wrapperHeight / slideHeight
    const trX = (wrapperWidth - slideWidth) / 2
    const trY = (wrapperHeight - slideHeight) / 2
    const $slide = this.$wrapper.querySelector('.libe-insta-slide')
    const $placeholder = this.$wrapper.querySelector('.libe-insta-slide-wysiwyg__placeholder')
    $slide.style.transform = `matrix(${scX}, 0, 0, ${scY}, ${trX}, ${trY})`
    $placeholder.style.transform = `matrix(${scX}, 0, 0, ${scY}, ${trX}, ${trY})`
  }

  unactivateAllEditors () {
    this.editorsRefs.forEach(editor => {
      editor.unactivate()
    })
  }
}

import React, { Component } from 'react'

import { displays } from '../utils/'
import Slide from '../Slide'
import WysiwygEditor from '../../../../../components/logical/WysiwygEditor'
import TextInput from '../../../../../components/inputs/TextInput'
import RangeInput from '../../../../../components/inputs/RangeInput'
import SelectList from '../../../../../components/inputs/SelectList'

import Wrapper from './style'

const IfDomReady = props => props.domIsReady
  ? <div className={`libe-insta-slide-wysiwyg__editors`}>
    {props.children}
  </div>
  : ''

export default class LibeInstaSlideWysiwyg extends Component {
  /* * * * * * * * * * * * * * * * * * *
   *
   * CONSTRUCTOR
   *
   * * * * * * * * * * * * * * * * * * */
  constructor () {
    super()
    this.state = {
      domIsReady: false,
      editorsAreReady: false
    }
    this.inputs = {}
    this.editors = []
    this.resize = this.resize.bind(this)
    this.populateFields = this.populateFields.bind(this)
    this.unactivateAllEditors = this.unactivateAllEditors.bind(this)
    this.interval = window.setInterval(this.resize, 2000)
    window.addEventListener('resize', this.resize)
  }

  /* * * * * * * * * * * * * * * * * * *
   *
   * DID MOUNT
   *
   * * * * * * * * * * * * * * * * * * */
  componentDidMount () {
    window.setTimeout(this.resize, 50)
    this.setState({ domIsReady: true })
  }

  /* * * * * * * * * * * * * * * * * * *
   *
   * DID UPDATE
   *
   * * * * * * * * * * * * * * * * * * */
  componentDidUpdate () {
    window.setTimeout(this.resize(), 50)
    if (!this.state.domIsReady) return this.setState({ domIsReady: true })
    if (!this.state.editorsAreReady) return this.setState({ editorsAreReady: true })
    this.editors = this.editors.filter(editor => {
      if (!editor) return false
      if (!editor.unactivate) return false
      if (typeof editor.unactivate !== 'function') return false
      return true
    })
    this.populateFields()
  }

  /* * * * * * * * * * * * * * * * * * *
   *
   * DID UNMOUNT
   *
   * * * * * * * * * * * * * * * * * * */
  componentWillUnmount () {
    window.clearInterval(this.interval)
    window.removeEventListener('resize', this.resize)
  }

  /* * * * * * * * * * * * * * * * * * *
   *
   * RENDER
   *
   * * * * * * * * * * * * * * * * * * */
  render () {
    const { props, state, $wrapper } = this
    const { slide, dispatchEdition } = props

    /* Editors */
    const $ = q => $wrapper
      ? $wrapper.querySelector(q)
      : document.createElement('DIV').querySelector(q)

    const bgSrcDispatcher = e => {
      const newVal = slide.backgroundImages &&
      slide.backgroundImages[0]
        ? { ...slide.backgroundImages[0], src: e.target.value }
        : {
          position: 50,
          src: e.target.value,
          zoom: 1080
        }
      return dispatchEdition('backgroundImages', [newVal])
    }
    const bgZoomDispatcher = e => {
      const newVal = slide.backgroundImages &&
      slide.backgroundImages[0]
        ? { ...slide.backgroundImages[0], zoom: e.target.value }
        : {
          position: 50,
          src: '',
          zoom: e.target.value
        }
      return dispatchEdition('backgroundImages', [newVal])
    }
    const bgPosXDispatcher = e => {
      const newVal = slide.backgroundImages &&
      slide.backgroundImages[0]
        ? { ...slide.backgroundImages[0],
          position: {
            x: e.target.value,
            y: slide.backgroundImages[0].position
              ? slide.backgroundImages[0].position.y
              : 50
          }
        }
        : { position: { x: e.target.value, y: 50 },
          src: '',
          zoom: 1080
        }
      return dispatchEdition('backgroundImages', [newVal])
    }
    const bgPosYDispatcher = e => {
      const newVal = slide.backgroundImages &&
      slide.backgroundImages[0]
        ? { ...slide.backgroundImages[0],
          position: {
            x: slide.backgroundImages[0].position
              ? slide.backgroundImages[0].position.x
              : 50,
            y: e.target.value
          }
        }
        : {
          position: { x: 50, y: e.target.value },
          src: '',
          zoom: 1080
        }
      return dispatchEdition('backgroundImages', [newVal])
    }
    const hideLogoDispatcher = e => {
      const newVal = { ...slide.logo, hidden: parseInt(e.target.value, 10) }
      return dispatchEdition('logo', newVal)
    }
    const imgSrcDispatcher = e => {
      const newVal = { ...slide.image, src: e.target.value }
      return dispatchEdition('image', newVal)
    }
    const titleDispatcher = e => {
      const newVal = { ...slide.title, value: e.target.value }
      return dispatchEdition('title', newVal)
    }
    const hideTitleDispatcher = e => {
      const newVal = { ...slide.title, hidden: parseInt(e.target.value, 10) }
      return dispatchEdition('title', newVal)
    }
    const textDispatcher = e => {
      const newVal = { ...slide.text, value: e.target.value }
      return dispatchEdition('text', newVal)
    }
    const contentPositionDispatcher = e => {
      return dispatchEdition('contentPosition', e.target.value)
    }

    /* Display logic */
    const displayIsAllowed = displays.indexOf(slide.display) + 1
    const display = slide.display
      ? displayIsAllowed ? slide.display : `unallowed`
      : `no-display`

    /* Assign classes to component */
    const r = 'libe-insta-slide-wysiwyg'
    const classes = [r]
    classes.push(`${r}_${display}`)

    /* Display */
    this.editors = []
    return <Wrapper
      ref={node => { this.$wrapper = node }}
      className={classes.join(` `)}>
      <div className={`${r}__slide`}>
        <Slide {...slide} />
      </div>
      <IfDomReady domIsReady={state.domIsReady}>{[

        /* All displays with a bg image – Background image  */
        <div key='Background image editor'
          className='libe-insta-slide-wysiwyg__editor'>
          <WysiwygEditor title='Image de fond'
            onActivate={this.unactivateAllEditors}
            ref={node => { this.editors.push(node) }}
            domRoot={$(`.libe-insta-slide__background-images`)}>
            <TextInput blurOnEnter
              label="Adresse de l'image"
              ref={node => { this.inputs.bgImgSrc = node }}
              placeholder="Tapez ici l'url de l'image"
              onChange={bgSrcDispatcher} />
            <RangeInput label='Position horizontale'
              ref={node => { this.inputs.bgImgXPos = node }}
              onChange={bgPosXDispatcher} />
            <RangeInput label='Position verticale'
              ref={node => { this.inputs.bgImgYPos = node }}
              onChange={bgPosYDispatcher} />
            <RangeInput label='Zoom'
              min={1080} max={8000} unit=' px'
              defaultValue={1080}
              ref={node => { this.inputs.bgImgZoom = node }}
              onChange={bgZoomDispatcher} />{
              display !== 'bg-image'
                ? ''
                : <SelectList label='Masquer le logo'
                  onChange={hideLogoDispatcher}
                  ref={node => { this.inputs.bgImgLogoHide = node }}
                  options={[
                    { label: 'Afficher', value: '0', selected: true },
                    { label: 'Masquer', value: '1' } ]} />
            }</WysiwygEditor>
        </div>,

        /* Cover display – Title and text */
        <div key='Cover display / title and text editor'
          className='libe-insta-slide-wysiwyg__editor'>
          <WysiwygEditor title='Titre et texte de la slide'
            onActivate={this.unactivateAllEditors}
            ref={node => { this.editors.push(node) }}
            domRoot={$(`.libe-insta-slide__cover-display`)}>
            {(!slide.title || (slide.title && !slide.title.hidden))
              ? <TextInput blurOnEnter
                label='Titre'
                placeholder='Tapez ici le titre de la slide'
                ref={node => { this.inputs.coverDisplayTitle = node }}
                onChange={titleDispatcher} />
              : ''}
            <TextInput blurOnEnter
              label='Texte'
              placeholder='Tapez ici le texte de la slide'
              ref={node => { this.inputs.coverDisplayText = node }}
              onChange={textDispatcher} />
            <RangeInput label='Position du bloc'
              onChange={contentPositionDispatcher}
              ref={node => { this.inputs.coverDisplayContentPos = node }} />
            <SelectList label='Masquer le titre'
              onChange={hideTitleDispatcher}
              ref={node => { this.inputs.coverDisplayTitleHide = node }}
              options={[
                { label: 'Afficher', value: '0', selected: true },
                { label: 'Masquer', value: '1' } ]} />
          </WysiwygEditor>
        </div>,

        /* Image and text display – Image */
        <div key='Image and text display / image editor'
          className='libe-insta-slide-wysiwyg__editor'>
          <WysiwygEditor title='Image de la slide'
            onActivate={this.unactivateAllEditors}
            ref={node => { this.editors.push(node) }}
            domRoot={$(`.libe-insta-slide__image-and-text-display .libe-insta-slide__image`)}>
            <TextInput blurOnEnter
              label="Adresse de l'image"
              ref={node => { this.inputs.imgAndTxtDisplayImgSrc = node }}
              placeholder="Tapez ici l'url de l'image"
              onChange={imgSrcDispatcher} />
          </WysiwygEditor>
        </div>,

        /* Image and text display – Title and text */
        <div key='Image and text display / title and text editor'
          className='libe-insta-slide-wysiwyg__editor'>
          <WysiwygEditor title='Texte et titre de la slide'
            onActivate={this.unactivateAllEditors}
            ref={node => { this.editors.push(node) }}
            domRoot={$(`.libe-insta-slide__image-and-text-display .libe-insta-slide__title-and-text`)}>
            <SelectList label='Masquer le titre'
              onChange={hideTitleDispatcher}
              ref={node => { this.inputs.imgAndTxtDisplayTitleHide = node }}
              options={[
                { label: 'Afficher', value: '0', selected: true },
                { label: 'Masquer', value: '1' } ]} />
            {(!slide.title || (slide.title && !slide.title.hidden))
              ? <TextInput blurOnEnter
                label='Titre'
                placeholder='Tapez ici le titre de la slide'
                ref={node => { this.inputs.imgAndTxtDisplayTitle = node }}
                onChange={titleDispatcher} />
              : ''}
            <TextInput blurOnEnter
              label='Texte'
              placeholder='Tapez ici le texte de la slide'
              ref={node => { this.inputs.imgAndTxtDisplayText = node }}
              onChange={textDispatcher} />
          </WysiwygEditor>
        </div>,

        /* Quote on bg display – Quote */
        <div key='Quote on bg / quote editor'
          className='libe-insta-slide-wysiwyg__editor'>
          <WysiwygEditor title='Texte de la citation'
            onActivate={this.unactivateAllEditors}
            ref={node => { this.editors.push(node) }}
            domRoot={$(`.libe-insta-slide__quote-on-bg-image-display .libe-insta-slide__quote`)}>
            <TextInput blurOnEnter
              placeholder='Tapez ici la citation'
              ref={node => { this.inputs.quoteOnBgDisplayTitle = node }}
              onChange={titleDispatcher} />
          </WysiwygEditor>
        </div>,

        /* Quote on bg display – Author */
        <div key='Quote on bg / author editor'
          className='libe-insta-slide-wysiwyg__editor'>
          <WysiwygEditor title='Auteur de la citation'
            onActivate={this.unactivateAllEditors}
            ref={node => { this.editors.push(node) }}
            domRoot={$(`.libe-insta-slide__quote-on-bg-image-display .libe-insta-slide__quote-author`)}>
            <TextInput blurOnEnter
              placeholder="Tapez ici l'auteur de la citation"
              ref={node => { this.inputs.quoteOnBgDisplayText = node }}
              onChange={textDispatcher} />
          </WysiwygEditor>
        </div>,

        /* Text on bg display – Text */
        <div key='Text on bg / text editor'
          className='libe-insta-slide-wysiwyg__editor'>
          <WysiwygEditor title='Texte de la slide'
            onActivate={this.unactivateAllEditors}
            ref={node => { this.editors.push(node) }}
            domRoot={$(`.libe-insta-slide__text-on-bg-image-display .libe-insta-slide__text-panel`)}>
            <TextInput blurOnEnter
              placeholder='Tapez ici le texte de la slide'
              ref={node => { this.inputs.textOnBgDisplayText = node }}
              onChange={textDispatcher} />
            <RangeInput label='Position du bloc'
              onChange={contentPositionDispatcher}
              ref={node => { this.inputs.textOnBgDisplayContentPos = node }} />
          </WysiwygEditor>
        </div>

      ]}</IfDomReady>

      <div className={`${r}__placeholder`} />
    </Wrapper>
  }

  /* * * * * * * * * * * * * * * * * * *
   *
   * POPULATE FIELDS
   *
   * * * * * * * * * * * * * * * * * * */
  populateFields () {
    const {
      props: { slide: {
        backgroundImages,
        title,
        text,
        image,
        contentPosition,
        logo
      } },
      inputs: {
        bgImgSrc,
        bgImgXPos,
        bgImgYPos,
        bgImgZoom,
        bgImgLogoHide,
        coverDisplayTitle,
        coverDisplayTitleHide,
        coverDisplayContentPos,
        imgAndTxtDisplayImgSrc,
        imgAndTxtDisplayTitle,
        imgAndTxtDisplayTitleHide,
        quoteOnBgDisplayTitle,
        coverDisplayText,
        imgAndTxtDisplayText,
        quoteOnBgDisplayText,
        textOnBgDisplayText,
        textOnBgDisplayContentPos
      }
    } = this
    // Bg image fields
    if (backgroundImages && backgroundImages[0]) {
      if (bgImgSrc) bgImgSrc.setValue(backgroundImages[0].src)
      if (backgroundImages[0].position) {
        if (bgImgXPos) bgImgXPos.setValue(backgroundImages[0].position.x)
        if (bgImgYPos) bgImgYPos.setValue(backgroundImages[0].position.y)
      }
      if (bgImgZoom) bgImgZoom.setValue(backgroundImages[0].zoom)
    }
    // Title fields
    if (title) {
      if (coverDisplayTitle) coverDisplayTitle.setValue(title.value || '')
      if (coverDisplayTitleHide) coverDisplayTitleHide.setValue(title.hidden || '0')
      if (imgAndTxtDisplayTitle) imgAndTxtDisplayTitle.setValue(title.value || '')
      if (imgAndTxtDisplayTitleHide) imgAndTxtDisplayTitleHide.setValue(title.hidden || '0')
      if (quoteOnBgDisplayTitle) quoteOnBgDisplayTitle.setValue(title.value || '')
    }
    // Text fields
    if (text) {
      if (coverDisplayText) coverDisplayText.setValue(text.value || '')
      if (imgAndTxtDisplayText) imgAndTxtDisplayText.setValue(text.value || '')
      if (quoteOnBgDisplayText) quoteOnBgDisplayText.setValue(text.value || '')
      if (textOnBgDisplayText) textOnBgDisplayText.setValue(text.value || '')
    }
    // Image fields
    if (image) {
      if (imgAndTxtDisplayImgSrc) imgAndTxtDisplayImgSrc.setValue(image.src || '')
    }
    // Content position fields
    if (contentPosition) {
      if (coverDisplayContentPos) coverDisplayContentPos.setValue(contentPosition)
      if (textOnBgDisplayContentPos) textOnBgDisplayContentPos.setValue(contentPosition)
    }
    // Logo fields
    if (logo) {
      if (bgImgLogoHide) bgImgLogoHide.setValue(logo.hidden || '0')
    }
  }

  /* * * * * * * * * * * * * * * * * * *
   *
   * RESIZE
   *
   * * * * * * * * * * * * * * * * * * */
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

  /* * * * * * * * * * * * * * * * * * *
   *
   * UNACTIVATE ALL EDITORS
   *
   * * * * * * * * * * * * * * * * * * */
  unactivateAllEditors () {
    this.editors.forEach(editor => {
      editor.unactivate()
    })
  }
}

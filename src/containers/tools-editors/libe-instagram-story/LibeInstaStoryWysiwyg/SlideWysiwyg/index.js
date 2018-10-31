import React, { Component } from 'react'

import { displays } from '../utils/'
import Slide from '../Slide'
import WysiwygEditor from '../../../../../components/logical/WysiwygEditor'
import TextInput from '../../../../../components/inputs/TextInput'
import RangeInput from '../../../../../components/inputs/RangeInput'

import Wrapper from './style'

export default class LibeInstaSlideWysiwyg extends Component {
  constructor () {
    super()
    this.wysiwygEditors = []
    this.populateFields = this.populateFields.bind(this)
    this.activateEditor = this.activateEditor.bind(this)
    this.unactivateAllEditors = this.unactivateAllEditors.bind(this)
  }

  componentDidMount () {
    const { props: { slide, dispatchEdition } } = this
    const r = 'libe-insta-slide-wysiwyg'
    const slideClass = 'libe-insta-slide'
    const $finder = q => this.$wrapper.querySelector(q)

    const bgImgSrcEditorInput = <TextInput
      label="Adresse de l'image"
      placeholder="Tapez ici l'url de l'image"
      ref={node => this.$bgImgSrcEditorInput = node}
      onChange={e => dispatchEdition('backgroundImages', [{
        ...slide.backgroundImages[0],
        src: e.target.value
      }])} />

    const bgImgPosEditorInput = <RangeInput
      label='Position'
      ref={node => this.$bgImgPosEditorInput = node}
      onChange={e => dispatchEdition('backgroundImages', [{
        ...slide.backgroundImages[0],
        position: e.target.value
      }])} />

    const imgSrcEditorInput = <TextInput
      label="Adresse de l'image"
      placeholder="Tapez ici l'url de l'image"
      ref={node => this.$imgSrcEditorInput = node}
      onChange={e => dispatchEdition('image', [{
        ...slide.image,
        src: e.target.value
      }])} />

    const titleEditorInput = <TextInput
      placeholder='Tapez ici le titre de la slide'
      ref={node => this.$titleEditorInput = node}
      onChange={e => dispatchEdition('title', {
        ...slide.title,
        value: e.target.value
      })} />

    const textEditorInput = <TextInput
      placeholder='Tapez ici le texte de la slide'
      ref={node => this.$textEditorInput = node}
      onChange={e => dispatchEdition('text', {
        ...slide.text,
        value: e.target.value
      })} />
    
    this.wysiwygEditors = [{
      /* Background images */
      root: $finder(`.${slideClass}__background-images`),
      title: 'Image de fond',
      slug: 'bg-images',
      reference: '$bgImagesEditor',
      children: <div>
        {bgImgSrcEditorInput}
        {bgImgPosEditorInput}
      </div>
    }, {
      /* Cover display */
      root: $finder(`.${slideClass}__cover-display .${slideClass}__icon-title`),
      title: 'Titre de la slide',
      slug: 'cover-title',
      reference: '$coverTitleEditor',
      children: titleEditorInput
    }, {
      root: $finder(`.${slideClass}__cover-display .${slideClass}__text-panel`),
      title: 'Texte de la slide',
      slug: 'cover-text',
      reference: '$coverTextEditor',
      children: textEditorInput
    }, {
      /* Image and text */
      root: $finder(`.${slideClass}__image-and-text-display .${slideClass}__image img`),
      title: 'Image de la slide',
      slug: 'image-and-text-image',
      reference: '$imgAndTxtImgEditor',
      children: imgSrcEditorInput
    }, {
      root: $finder(`.${slideClass}__image-and-text-display .${slideClass}__label-title`),
      title: 'Titre de la slide',
      slug: 'image-and-text-title',
      reference: '$imgAndTxtTitleEditor',
      children: titleEditorInput
    }, {
      root: $finder(`.${slideClass}__image-and-text-display .${slideClass}__paragraph`),
      title: 'Texte de la slide',
      slug: 'image-and-text-text',
      reference: '$imgAndTxtTextEditor',
      children: textEditorInput
    }, {
      /* Quote on bg image */
      root: $finder(`.${slideClass}__quote-on-bg-image-display .${slideClass}__quote`),
      title: 'Texte de la citation',
      slug: 'quote-on-bg-image-quote',
      reference: '$quoteOnBgImgTitleEditor',
      children: titleEditorInput
    }, {
      root: $finder(`.${slideClass}__quote-on-bg-image-display .${slideClass}__quote-author`),
      title: 'Auteur de la citation',
      slug: 'quote-on-bg-image-author',
      reference: '$quoteOnBgImgTextEditor',
      children: textEditorInput
    }, {
      /* Text on bg image */
      root: $finder(`.${slideClass}__text-on-bg-image-display .${slideClass}__text-panel`),
      title: 'Texte de la slide',
      slug: 'text-on-bg-image-text',
      reference: '$txtOnBgImgTextEditor',
      children: textEditorInput
    }].map((params, i) => ({
      ...params,
      wrapper: <div
        key={i}
        className={`${r}__${params.slug}-wysiwyg-editor`}>
        <WysiwygEditor
          title={params.title}
          domRoot={params.root}
          innerRef={node => { this[params.reference] = node }}
          activate={e => this.activateEditor(this[params.reference])}>
          {params.children}
        </WysiwygEditor>
      </div>
    }))

    console.log('----- MOUNT -----')
    setTimeout(this.populateFields, 50)
  }

  componentDidUpdate () {
    console.log('----- UPDATE -----')
    setTimeout(this.populateFields, 50)
  }

  populateFields () {
    const { props: { slide } } = this
    // this.$titleEditorInput.input.value = 'coucou'
    this.$bgImgSrcEditorInput.input.value = 'lol'
    this.$bgImgPosEditorInput.input.value = 'lol'
    this.$imgSrcEditorInput.input.value = 'lol'
    this.$titleEditorInput.input.value = 'lol'
    this.$textEditorInput.input.value = 'lol'
    // if (slide.backgroundImages) {
    //   this.$bgImgSrcEditorInput.input.value = slide.backgroundImages[0].src
    //   this.$bgImgPosEditorInput.input.value = slide.backgroundImages[0].position
    // }
    // if (slide.image) this.$imgSrcEditorInput.input.value = slide.image.src
    // if (slide.title) this.$titleEditorInput.input.value = slide.title.value
    // if (slide.text) this.$textEditorInput.input.value = slide.text.value

  }

  activateEditor (editor) {
    this.unactivateAllEditors()
    editor.activate()
  }

  unactivateAllEditors () {
    this.wysiwygEditors.forEach(params => {
      this[params.reference].unactivate()
    })
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
    const { wysiwygEditors } = this

    /* Display */
    return <Wrapper
      innerRef={node => { this.$wrapper = node }}
      className={classes.join(` `)}>
      <div className={`${r}__slide`}>
        <Slide {...slide} />
      </div>
      <div className={`${r}__editors`}>
        {this.wysiwygEditors.map(params => params.wrapper)}
      </div>
    </Wrapper>
  }
}

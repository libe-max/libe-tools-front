import React, { Component } from 'react'

import TextInput from '../../../../../../components/inputs/TextInput'
import RangeInput from '../../../../../../components/inputs/RangeInput'
import Button from '../../../../../../components/buttons/Button'
import ParagraphTitle from '../../../../../../components/text-levels/ParagraphTitle'
import ParamBox from '../ParamBox'
import QuoteOnBgImageDisplay from '../QuoteOnBgImageDisplay/'

import Wrapper from './style'

export default class QuoteOnBgImageDisplayWysiwyg extends Component {
  constructor () {
    super()
    this.state = { selected: null }
    this.rootClass = `libe-insta-quote-on-bg-image-display-slide-wysiwyg`
    this.selectElement = this.selectElement.bind(this)
    this.populateSettingsFields = this.populateSettingsFields.bind(this)
  }

  componentDidMount () {
    const { $wrapper } = this
    const select = query => $wrapper.querySelector(query)
    this.$bgImages = select(`.libe-insta-quote-on-bg-image-display-slide__background-images`)
    this.$quote = select(`.libe-insta-quote-on-bg-image-display-slide__quote`)
    this.$author = select(`.libe-insta-quote-on-bg-image-display-slide__quote-author`)
    this.$bgImages.addEventListener('click', e => {this.selectElement('bg')})
    this.$quote.addEventListener('click', e => {this.selectElement('quote')})
    this.$author.addEventListener('click', e => {this.selectElement('author')})
    this.populateSettingsFields()
  }

  componentDidUpdate () {
    this.populateSettingsFields()
  }

  componentWillUnmount () {
    this.$bgImages.removeEventListener('click', e => {this.selectElement('bg')})
    this.$quote.removeEventListener('click', e => {this.selectElement('quote')})
    this.$author.removeEventListener('click', e => {this.selectElement('author')})
  }

  selectElement (name) {
    this.setState({ selected: name })
    if (name === 'bg' && this.$bgSrcSetter0) this.$bgSrcSetter0.input.focus()
    if (name === 'quote' && this.$quoteValueSetter) this.$quoteValueSetter.input.focus()
    if (name === 'author' && this.$authorValueSetter) this.$authorValueSetter.input.focus()
  }

  populateSettingsFields () {
    const { props } = this
    const { slide } = props
    const quote = slide.title || { value: '' }
    const author = slide.text || { value: '' }
    const background = slide.backgroundImages || [{ src: '', position: 50 }]
    if (this.$quoteValueSetter) this.$quoteValueSetter.input.value = quote.value
    if (this.$authorValueSetter) this.$authorValueSetter.input.value = author.value
    if (this.$bgSrcSetter0) this.$bgSrcSetter0.input.value = background[0].src
    if (this.$bgPosSetter0) this.$bgPosSetter0.input.value = background[0].position
    if (this.$bgSrcSetter1) this.$bgSrcSetter1.input.value = background[1]
      ? background[1].src : ''
    if (this.$bgPosSetter1) this.$bgPosSetter1.input.value = background[1]
      ? background[1].position : ''
  }

  render () {
    const { props, state } = this
    const { slide, dispatchEdition, width } = props

    /* Inner logic */
    const hasNoBg = !slide.backgroundImages || !slide.backgroundImages.length
    const hasTwoImages = slide.backgroundImages && slide.backgroundImages.length === 2
    const hasNoQuote = !slide.title || !slide.title.value
    const hasNoAuthor = !slide.text || !slide.text.value
    const bgIsSelected = state.selected === 'bg'
    const quoteIsSelected = state.selected === 'quote'
    const authorIsSelected = state.selected === 'author'
    const renderedSlide = { ...slide }
    if (hasNoBg) renderedSlide.backgroundImages = [{}]
    if (hasNoQuote) renderedSlide.title = { value: `Ajoutez un titre` }
    if (hasNoAuthor) renderedSlide.text = { value: `Ajoutez un texte` }
    const addImage = e => dispatchEdition(
      'backgroundImages', [
        ...renderedSlide.backgroundImages, {
          src: '',
          position: 50
      }])
    const removeImage = n => dispatchEdition(
      'backgroundImages', [
        ...renderedSlide.backgroundImages.slice(0, n),
        ...renderedSlide.backgroundImages.slice(n + 1)
      ])
    const changeImageSrc = (n, val) => dispatchEdition(
      'backgroundImages', [
        ...renderedSlide.backgroundImages.slice(0, n), {
          ...renderedSlide.backgroundImages[n],
          src: val
        }, ...renderedSlide.backgroundImages.slice(n + 1)
      ])
    const changeImagePos = (n, val) => dispatchEdition(
      'backgroundImages', [
        ...renderedSlide.backgroundImages.slice(0, n), {
          ...renderedSlide.backgroundImages[n],
          position: parseInt(val, 10) || 1
        }, ...renderedSlide.backgroundImages.slice(n + 1)
      ])

    /* Assign classes */
    const classes = [this.rootClass]
    if (hasNoBg) classes.push(`${this.rootClass}_no-bg`)
    if (hasNoQuote) classes.push(`${this.rootClass}_no-quote`)
    if (hasNoAuthor) classes.push(`${this.rootClass}_no-author`)
    if (bgIsSelected) classes.push(`${this.rootClass}_bg-selected`)
    if (quoteIsSelected) classes.push(`${this.rootClass}_quote-selected`)
    if (authorIsSelected) classes.push(`${this.rootClass}_author-selected`)

    /* Display */
    return <Wrapper
      className={classes.join(` `)}
      innerRef={node => this.$wrapper = node}>
      <QuoteOnBgImageDisplay slide={renderedSlide} width={width} />
      <div className={`${this.rootClass}__background-setter`}>
        <ParamBox
          title='Images de fond'
          handleClose={e => this.selectElement(null)}>
          <div className={`libe-insta-param-box__section`}>
            <ParagraphTitle>Image 1</ParagraphTitle>
            <TextInput
              label={`URL de l'image`}
              placeholder={`Entrez l'URL de l'image`}
              ref={node => this.$bgSrcSetter0 = node}
              onChange={e => changeImageSrc(0, e.target.value)} />
            <RangeInput
              unit='%'
              label={`Position de l'image`}
              ref={node => this.$bgPosSetter0 = node}
              onChange={e => changeImagePos(0, e.target.value)} />
            {hasTwoImages
              ? <Button link onClick={e => removeImage(0)}>Supprimer cette image</Button>
              : null}
          </div>
          {hasTwoImages
            ? <div className={`libe-insta-param-box__section`}>
                <ParagraphTitle>Image 2</ParagraphTitle>
                <TextInput
                  label={`URL de l'image`}
                  placeholder={`Entrez l'URL de l'image`}
                  ref={node => this.$bgSrcSetter1 = node}
                  onChange={e => changeImageSrc(1, e.target.value)} />
                <RangeInput
                  unit='%'
                  label={`Position de l'image`}
                  ref={node => this.$bgPosSetter1 = node}
                  onChange={e => changeImagePos(1, e.target.value)} />
                <Button link onClick={e => removeImage(1)}>Supprimer cette image</Button>
              </div>
            : null}
          {!hasTwoImages
            ? <Button link onClick={addImage}>+ Ajouter une image</Button>
            : null}
        </ParamBox>
      </div>
      <div className={`${this.rootClass}__quote-setter`}>
        <ParamBox
          title='Texte de la citation'
          handleClose={e => this.selectElement(null)}>
          <TextInput
            blurOnEnter
            label={`Citation`}
            placeholder={`Entrez la citation`}
            ref={node => this.$quoteValueSetter = node}
            onBlur={e => this.selectElement(null)}
            onChange={e => dispatchEdition('title', { value: e.target.value })} />
        </ParamBox>
      </div>
      <div className={`${this.rootClass}__author-setter`}>
        <ParamBox
          title='Auteur de la citation'
          handleClose={e => this.selectElement(null)}>
          <TextInput
            blurOnEnter
            label={`Nom`}
            placeholder={`Tapez le nom associé à la citation`}
            ref={node => this.$authorValueSetter = node}
            onBlur={e => this.selectElement(null)}
            onChange={e => dispatchEdition('text', { value: e.target.value })} />
        </ParamBox>
      </div>
    </Wrapper>
  }
}

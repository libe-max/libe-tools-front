import React, { Component } from 'react'

import TextInput from '../../../../../../components/inputs/TextInput'
import ParamBox from '../ParamBox'
import ImgAndTextDisplay from '../ImgAndTextDisplay/'

import Wrapper from './style'

export default class ImgAndTextDisplayWysiwyg extends Component {
  constructor () {
    super()
    this.state = { selected: null }
    this.rootClass = `libe-insta-img-and-text-display-slide-wysiwyg`
    this.selectElement = this.selectElement.bind(this)
    this.populateSettingsFields = this.populateSettingsFields.bind(this)
  }

  componentDidMount () {
    const { $wrapper } = this
    const select = query => $wrapper.querySelector(query)
    this.$image = select(`.libe-insta-img-and-text-display-slide__image`)
    this.$title = select(`.libe-insta-img-and-text-display-slide__title`)
    this.$text = select(`.libe-insta-img-and-text-display-slide__text`)
    this.$image.addEventListener('click', e => { this.selectElement('img') })
    this.$title.addEventListener('click', e => { this.selectElement('title') })
    this.$text.addEventListener('click', e => { this.selectElement('text') })
    this.populateSettingsFields()
  }

  componentDidUpdate () {
    this.populateSettingsFields()
  }

  componentWillUnmount () {
    this.$image.removeEventListener('click', e => { this.selectElement('img') })
    this.$title.removeEventListener('click', e => { this.selectElement('title') })
    this.$text.removeEventListener('click', e => { this.selectElement('text') })
  }

  selectElement (name) {
    this.setState({ selected: name })
    if (name === 'img' && this.$imgSrcSetter) this.$imgSrcSetter.input.focus()
    if (name === 'title' && this.$titleValueSetter) this.$titleValueSetter.input.focus()
    if (name === 'text' && this.$textValueSetter) this.$textValueSetter.input.focus()
  }

  populateSettingsFields () {
    const { props } = this
    const { slide } = props
    const title = slide.title || { value: '' }
    const text = slide.text || { value: '' }
    const image = slide.image || { src: '', position: 50 }
    if (this.$titleValueSetter) this.$titleValueSetter.input.value = title.value
    if (this.$textValueSetter) this.$textValueSetter.input.value = text.value
    if (this.$imgSrcSetter) this.$imgSrcSetter.input.value = image.src
  }

  render () {
    const { props, state } = this
    const { slide, dispatchEdition, width } = props

    /* Inner logic */
    const hasNoImg = !slide.image
    const hasNoTitle = !slide.title || !slide.title.value
    const hasNoText = !slide.text || !slide.text.value
    const imgIsSelected = state.selected === 'img'
    const titleIsSelected = state.selected === 'title'
    const textIsSelected = state.selected === 'text'
    const renderedSlide = { ...slide }
    if (hasNoImg) renderedSlide.image = {}
    if (hasNoTitle) renderedSlide.title = { value: `Ajoutez un titre` }
    if (hasNoText) renderedSlide.text = { value: `Ajoutez un texte` }
    const changeImageSrc = (val) => dispatchEdition(
      'image', {
        ...renderedSlide.image,
        src: val
      })

    /* Assign classes */
    const classes = [this.rootClass]
    if (hasNoImg) classes.push(`${this.rootClass}_no-img`)
    if (hasNoTitle) classes.push(`${this.rootClass}_no-title`)
    if (hasNoText) classes.push(`${this.rootClass}_no-text`)
    if (imgIsSelected) classes.push(`${this.rootClass}_img-selected`)
    if (titleIsSelected) classes.push(`${this.rootClass}_title-selected`)
    if (textIsSelected) classes.push(`${this.rootClass}_text-selected`)

    /* Display */
    return <Wrapper
      className={classes.join(` `)}
      innerRef={node => { this.$wrapper = node }}>
      <ImgAndTextDisplay slide={renderedSlide} width={width} />
      <div className={`${this.rootClass}__image-setter`}>
        <ParamBox
          title='Image'
          handleClose={e => this.selectElement(null)}>
          <div className={`libe-insta-param-box__section`}>
            <TextInput
              label={`URL de l'image`}
              placeholder={`Entrez l'URL de l'image`}
              ref={node => { this.$imgSrcSetter = node }}
              onChange={e => changeImageSrc(e.target.value)} />
          </div>
        </ParamBox>
      </div>
      <div className={`${this.rootClass}__title-setter`}>
        <ParamBox
          title='Titre'
          handleClose={e => this.selectElement(null)}>
          <TextInput
            blurOnEnter
            label={`Titre de la page`}
            placeholder={`Tapez le titre`}
            ref={node => { this.$titleValueSetter = node }}
            onBlur={e => this.selectElement(null)}
            onChange={e => dispatchEdition('title', { value: e.target.value })} />
        </ParamBox>
      </div>
      <div className={`${this.rootClass}__text-setter`}>
        <ParamBox
          title='Texte'
          handleClose={e => this.selectElement(null)}>
          <TextInput
            blurOnEnter
            label={`Texte`}
            placeholder={`Tapez le texte`}
            ref={node => { this.$textValueSetter = node }}
            onBlur={e => this.selectElement(null)}
            onChange={e => dispatchEdition('text', { value: e.target.value })} />
        </ParamBox>
      </div>
    </Wrapper>
  }
}

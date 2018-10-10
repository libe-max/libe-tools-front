import React, { Component } from 'react'

import TextInput from '../../../../../../components/inputs/TextInput'
import RangeInput from '../../../../../../components/inputs/RangeInput'
import bgImagePlaceholder from '../../assets/bg-image-placeholder.svg'
import CoverDisplay from '../CoverDisplay/'
import ParamBox from '../ParamBox'

import Wrapper from './style'

export default class CoverDisplayWysiwyg extends Component {
  constructor () {
    super()
    this.state = { selected: null }
    this.rootClass = `libe-insta-cover-display-slide-wysiwyg`
    this.selectElement = this.selectElement.bind(this)
    this.populateSettingsFields = this.populateSettingsFields.bind(this)
  }

  componentDidMount () {
    const { $wrapper } = this
    const select = query => $wrapper.querySelector(query)
    this.$bgImages = select(`.libe-insta-cover-display-slide__background-images`)
    this.$title = select(`.libe-insta-cover-display-slide__title`)
    this.$text = select(`.libe-insta-cover-display-slide__text`)
    this.$bgImages.addEventListener('click', e => {this.selectElement('bg')})
    this.$title.addEventListener('click', e => {this.selectElement('title')})
    this.$text.addEventListener('click', e => {this.selectElement('text')})
    this.populateSettingsFields()
  }

  componentDidUpdate () {
    this.populateSettingsFields()
  }

  componentWillUnmount () {
    this.$bgImages.removeEventListener('click', e => {this.selectElement('bg')})
    this.$title.removeEventListener('click', e => {this.selectElement('title')})
    this.$text.removeEventListener('click', e => {this.selectElement('text')})
  }

  selectElement (name) {
    this.setState({ selected: name })
    if (name === 'bg') return
    if (name === 'title') this.$titleValueSetter.input.focus()
    if (name === 'text') this.$textValueSetter.input.focus()
  }

  populateSettingsFields () {
    const { props, $wrapper } = this
    const { slide } = props
    const title = slide.title || { value: '' }
    const text = slide.text || { value: '' }
    const background = slide.backgroundImages || [{}]
    const select = query => $wrapper.querySelector(query)
    this.$titleValueSetter.input.value = title.value
    this.$textValueSetter.input.value = text.value
  }

  render () {
    const { props, state } = this
    const { slide, dispatchEdition, width, height} = props

    /* Inner logic */
    const hasNoBg = !slide.backgroundImages || !slide.backgroundImages.length
    const hasNoTitle = !slide.title || !slide.title.value
    const hasNoText = !slide.text || !slide.text.value
    const bgIsSelected = state.selected === 'bg'
    const titleIsSelected = state.selected === 'title'
    const textIsSelected = state.selected === 'text'

    const renderedSlide = { ...slide }
    if (hasNoBg) renderedSlide.backgroundImages = [{ src: bgImagePlaceholder, position: 50 }]
    if (hasNoTitle) renderedSlide.title = { value: `Ajoutez un titre` }
    if (hasNoText) renderedSlide.text = { value: `Ajoutez un texte` }

    /* Assign classes */
    const classes = [this.rootClass]
    if (hasNoBg) classes.push(`${this.rootClass}_no-bg`)
    if (hasNoTitle) classes.push(`${this.rootClass}_no-title`)
    if (hasNoText) classes.push(`${this.rootClass}_no-text`)
    if (bgIsSelected) classes.push(`${this.rootClass}_bg-selected`)
    if (titleIsSelected) classes.push(`${this.rootClass}_title-selected`)
    if (textIsSelected) classes.push(`${this.rootClass}_text-selected`)

    /* Display */
    return <Wrapper
      className={classes.join(` `)}
      innerRef={node => this.$wrapper = node}>
      <CoverDisplay slide={renderedSlide} width={width} />
      <div className={`${this.rootClass}__background-setter`}>
        <ParamBox
          title='Images de fond'
          handleClose={e => this.selectElement(null)}>
          <TextInput
            label={`URL de l'image`}
            placeholder={`Entrez l'URL de l'image`} />
          <RangeInput
            unit='%'
            label={`Position de l'image`} />
        </ParamBox>
      </div>
      <div className={`${this.rootClass}__title-setter`}>
        <ParamBox
          title='Titre'
          handleClose={e => this.selectElement(null)}>
          <TextInput
            blurOnEnter
            label={`Titre de la page`}
            placeholder={`Tapez le titre de la page`}
            ref={node => this.$titleValueSetter = node}
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
            placeholder={`Tapez le texte de la page`}
            ref={node => this.$textValueSetter = node}
            onBlur={e => this.selectElement(null)}
            onChange={e => dispatchEdition('text', { value: e.target.value })} />
        </ParamBox>
      </div>
    </Wrapper>
  }
}

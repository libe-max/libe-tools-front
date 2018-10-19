import React, { Component } from 'react'

import TextInput from '../../../../../../components/inputs/TextInput'
import RangeInput from '../../../../../../components/inputs/RangeInput'
import Button from '../../../../../../components/buttons/Button'
import ParagraphTitle from '../../../../../../components/text-levels/ParagraphTitle'
import ParamBox from '../ParamBox'
import FullImageDisplay from '../FullImageDisplay'

import Wrapper from './style'

export default class FullImageDisplayWysiwyg extends Component {
  constructor () {
    super()
    this.state = { selected: null }
    this.rootClass = `libe-insta-full-image-display-slide-wysiwyg`
    this.selectElement = this.selectElement.bind(this)
    this.populateSettingsFields = this.populateSettingsFields.bind(this)
  }

  componentDidMount () {
    const { $wrapper } = this
    const select = query => $wrapper.querySelector(query)
    this.$bgImages = select(`.libe-insta-full-image-display-slide__background-images`)
    this.$bgImages.addEventListener('click', e => {this.selectElement('bg')})
    this.populateSettingsFields()
  }

  componentDidUpdate () {
    this.populateSettingsFields()
  }

  componentWillUnmount () {
    this.$bgImages.removeEventListener('click', e => {this.selectElement('bg')})
  }

  selectElement (name) {
    this.setState({ selected: name })
    if (name === 'bg' && this.$bgSrcSetter0) this.$bgSrcSetter0.input.focus()
  }

  populateSettingsFields () {
    const { props } = this
    const { slide } = props
    const background = slide.backgroundImages || [{ src: '', position: 50 }]
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
    const bgIsSelected = state.selected === 'bg'
    const renderedSlide = { ...slide }
    if (hasNoBg) renderedSlide.backgroundImages = [{}]
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
    if (bgIsSelected) classes.push(`${this.rootClass}_bg-selected`)

    /* Display */
    return <Wrapper
      className={classes.join(` `)}
      innerRef={node => this.$wrapper = node}>
      <FullImageDisplay slide={renderedSlide} width={width} />
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
    </Wrapper>
  }
}

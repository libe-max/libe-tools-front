import React, { Component } from 'react'
import InputLabel from '../../text-levels/InputLabel'
import Button from '../../buttons/Button'
import Image from '../../images/Image'
import Wrapper from './style'

export default class FileInput extends Component {
  constructor () {
    super()
    this.state = { file: null }
  }

  render () {
    const props = this.props
    const state = this.state

    /* Interactions */
    const showFilesExplorer = e => this.input.click()
    const handleFileChange = e => this.setState({ file: this.input.files[0] || null })

    /* Assign classes to component */
    const isImg = src => src
      .split('.')
      .slice(-1)[0]
      .match(/^(jpg)|(jpeg)|(gif)|(bmp)|(svg)$/igm)
    let classes = 'file-input'
    if (state.file) classes += ' file-input_with-file'
    if (props.src) classes += ' file-input_with-source'
    if (props.src && isImg(props.src)) classes += ' file-input_with-image-source'
    if (props.src && !isImg(props.src)) classes += ' file-input_with-other-source'

    /* Inner logic */
    const Label = () => props.label ? <InputLabel>{props.label}</InputLabel> : null
    const FileName = () => state.file ? state.file.name : props.placeholder || 'Choisir un fichier'
    const getSourceName = (src = '') => src.split('/').slice(-1)[0]

    /* Display */
    return <Wrapper className={classes}>
      <Label />
      <div className='file-input__input'>
        <div className='file-input__fake-input' onClick={showFilesExplorer}>
          <FileName />
        </div>
        <Button minor className='file-input__cancel-file-select'>x</Button>
        <Button className='file-input__upload-file'>↑</Button>
        <div className='file-input__upload-loader' />
        <input type='file' onChange={handleFileChange} ref={n => { this.input = n }} />
      </div>
      <div className='file-input__image-file'>
        <div><Image src={props.src} /></div>
        <Button>Modifier</Button>
      </div>
      <div className='file-input__other-file'>
        <div>{getSourceName(props.src)}</div>
        <Button minor>Télécharger</Button>
        <Button>Modifier</Button>
      </div>
    </Wrapper>
  }
}

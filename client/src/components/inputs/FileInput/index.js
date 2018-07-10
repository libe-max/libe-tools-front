import React, { Component } from 'react'
import InputLabel from '../../text-levels/InputLabel'
import P from '../../text-levels/Paragraph'
import Button from '../../buttons/Button'
import Image from '../../images/Image'
import ShadowBox from '../../boxes/ShadowBox'
import loader from './assets/loader.gif'
import Wrapper from './style'

/* [WIP] Gérer l'affichage du label par css et répliquer
 * cette logique sur les autres inputs */

export default class FileInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      file: null,
      source: {
        size: null,
        type: null
      }
    }
    if (props.src) fetch(props.src, { method: 'GET', mode: 'cors' })
      .then(r => r.ok ? r.blob() : null)
      .then(res => {
        this.setState({ source: {
          size: res.size,
          type: res.type
        }})
      })
  }

  render () {
    const props = this.props
    const state = this.state

    /* Assign classes to component */
    let classes = 'file-input'
    if (props.uploading) classes += ' file-input_uploading'
    if (state.file) classes += ' file-input_with-file'
    if (props.src) classes += ' file-input_with-source'
    const isImg = (src = '') => src
      .split('.')
      .slice(-1)[0]
      .match(/^(jpg)|(jpeg)|(gif)|(bmp)|(svg)$/igm)
    if (props.src && isImg(props.src)) classes += ' file-input_with-image-source'
    if (props.src && !isImg(props.src)) classes += ' file-input_with-other-source'

    /* Interactions */
    const showFilesExplorer = e => { this.input.click() }
    const handleFileChange = e => { this.setState({ file: this.input.files[0] || null }) }
    const downloadSource = e => { window.open(props.src, '_blank') }
    const uploadFile = e => { props.onSubmit ? props.onSubmit(e, state.file) : null }
    const emptyFile = e => {
      this.input.value = null
      this.setState({ file: null })
    }

    /* Inner logic */
    const Label = () => props.label ? <InputLabel>{props.label}</InputLabel> : null
    const getSourceName = (src = '') => src.split('/').slice(-1)[0]
    const getSourceExt = (src = '') => src.split('.').slice(-1)[0]
    const readableFileSize = size => {
      if (!size && size !== 0) return 'no-size'
      let res = size
      let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      let unitSelector = 0
      while (res > 1023 && unitSelector < units.length - 1) {
        res = res / 1024
        unitSelector++
      }
      res = Math.floor(res * 100) / 100
      return `${res} ${units[unitSelector]}`
    }

    /* Display */
    return <Wrapper className={classes}>
      <Label />
      <div className='file-input__input'>
        <div className='file-input__fake-input' onClick={showFilesExplorer}>
          <div className='file-input__filename-placeholder'><P light>{props.placeholder || 'Choisir un fichier'}</P></div>
          <div className='file-input__filename-upload-prefix'><P light>Uploading...</P></div>
          <div className='file-input__filename'><P>{state.file ? state.file.name : null}</P></div>
        </div>
        <div className='file-input__cancel-file-select'><Button minor onClick={emptyFile}>x</Button></div>
        <div className='file-input__upload-file' onClick={uploadFile}><Button>↑</Button></div>
        <div className='file-input__upload-loader'><img src={loader} /></div>
        <div className='file-input__real-input'><input type='file' onChange={handleFileChange} ref={n => { this.input = n }} /></div>
      </div>
      <div className='file-input__image-source'>
        <div className='file-input__image'><Image contain src={props.src} /></div>
        <div className='file-input__image-source-infos-and-actions'>
          <div className='file-input__image-source-infos'>
            <div className='file-input__sourcesize'><P light small>{readableFileSize(state.source.size)} – </P></div>
            <div className='file-input__sourcetype'><P light small>{state.source.type || 'no-type'}</P></div>
            <div className='file-input__sourcename'><P>{getSourceName(props.src)}</P></div>
          </div>
          <div className='file-input__download-image-source'><Button minor onClick={downloadSource}>Télécharger</Button></div>
          <div className='file-input__edit-image-source'><Button onClick={showFilesExplorer}>Modifier</Button></div>
        </div>
      </div>
      <div className='file-input__other-source'>
        <ShadowBox>
          <div className='file-input__other-source-infos'>
            <div className='file-input__sourcesize'><P light small>{readableFileSize(state.source.size)} – </P></div>
            <div className='file-input__sourcetype'><P light small>{state.source.type || 'no-type'}</P></div>
            <div className='file-input__sourcename'><P>{getSourceName(props.src)}</P></div>
          </div>
          <div className='file-input__download-other-source'><Button minor onClick={downloadSource}>Télécharger</Button></div>
          <div className='file-input__edit-other-source'><Button onClick={showFilesExplorer}>Modifier</Button></div>
        </ShadowBox>
      </div>
    </Wrapper>
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
import ShadowBox from './ShadowBox'
import InputLabel from './InputLabel'
import Button from './Button'
import Image from './Image'

export default class FileInput extends Component {
  constructor () {
    super()
    this.state = { filename: null }
    this.handleFileChange = this.handleFileChange.bind(this)
    this.cancelFileSelect = this.cancelFileSelect.bind(this)
    this.triggerFileWindow = this.triggerFileWindow.bind(this)
  }

  handleFileChange () {
    const files = this.input.files
    if (files && files[0]) this.setState({ filename: files[0].name })
    else this.setState({ filename: null })
  }

  cancelFileSelect () {
    this.setState({ filename: null })
  }

  triggerFileWindow () {
    this.input.click()
  }

  render () {
    const props = this.props
    const state = this.state
    /* * * * * * * * * * * * * * * * * * *
     *
     *  Fake file input
     *
     * * * * * * * * * * * * * * * * * * */
    const FakeInputWrapper = styled.div`
      display: ${!props.src || state.filename ? 'flex' : 'none'};
      align-items: center;
      > div {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        cursor: pointer;
        flex-grow: 1;
        height: ${p => p.theme.units(5)};
        padding: 0 ${p => p.theme.units(2)};
        font-family: ${p => p.theme.fonts.main};
        font-size: ${p => p.theme.units(2)};
        line-height: ${p => p.theme.units(3)};
        border-style: solid;
        border-width: ${p => p.theme.units(.25)};
        border-color: ${p => p.theme.colors.borders};
        border-radius: ${p => p.theme.units(2.5)};
        overflow: hidden;
        #filename {
          color: ${p => p.theme.colors.text};
          max-height: 24px;
          width: fit-content !important;
        }
        #placeholder {
          color: ${p => p.theme.colors.lightText};
        }
      }
      #cancel-button,
      #upload-button { margin-left: ${p => p.theme.units(1)}; }
      #upload-button { flex-grow: 0; }
      #input { display: none; }
    `
    const FakeInput = () => <FakeInputWrapper>
      <div onClick={this.triggerFileWindow}>
        <div
          id='filename'
          ref={n => this.filename = n}
          style={{ display: state.filename ? 'block' : 'none' }}>
          {state.filename}</div>
        <div
          id='placeholder'
          ref={n => this.placeholder = n}
          style={{ display: state.filename ? 'none' : 'block' }}>
          {props.placeholder || 'Choose a file...'}</div>
      </div>
      <Button
        minor
        id='cancel-button'
        onClick={this.cancelFileSelect}
        innerRef={n => this.cancelButton = n}
        style={{ display: state.filename ? 'block' : 'none' }}>
        x</Button>
      <Button
        id='upload-button'
        onClick={() => alert('upload!')}
        innerRef={n => this.uploadButton = n}
        style={{ display: state.filename ? 'block' : 'none' }}>
        ↑</Button>
      <input
        id='input'
        type='file'
        ref={n => this.input = n}
        onChange={this.handleFileChange}/>
    </FakeInputWrapper>

    /* * * * * * * * * * * * * * * * * * *
     *
     *  Current file display
     *
     * * * * * * * * * * * * * * * * * * */
    const srcName = props.src ? props.src
      .split('/')
      .slice(-1)[0] : ''
    const srcExt = props.src ? props.src
      .split('.')
      .slice(-1)[0] : ''
    const imgExtRegexp = /^(jpg)|(jpeg)|(gif)|(bmp)|(svg)$/igm

    // Image file
    const ImageFileWrap = styled.div`
      position: relative;
      overflow: hidden;
      #actions {
        display: none;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${p => hexToRgba(p.theme.colors.dimBg, .8)};
      }
      &:hover #actions { display: flex; }
    `
    const ImageFile = props => <ImageFileWrap>
      <Image
        id='image'
        contain={1}
        src={props.src} />
      <div id='actions'>
        <Button
          onClick={this.triggerFileWindow}>
          Modifier
        </Button>
      </div>
    </ImageFileWrap>

    // Non-image file
    const DocThumbWrap = styled.div`
      box-sizing: border-box;
      padding: ${p => p.theme.units(1)};
      #file {
        display: flex;
        align-items: center;
      }
      #extension {
        box-sizing: border-box;
        display: inline-block;
        margin-right: ${p => p.theme.units(1)};
        padding: ${p => p.theme.units(1)};
        border-radius: ${p => p.theme.units(.5)};
        color: ${p => p.theme.colors.lightText};
        font-family: ${p => p.theme.fonts.main};
        font-size: ${p => p.theme.units(1.75)};
        line-height: ${p => p.theme.units(2)};
        font-weight: 600;
        background-color: ${p => p.theme.colors.shadedBg};
      }
      #sourceName {
        color: ${p => p.theme.colors.text};
        font-family: ${p => p.theme.fonts.main};
        font-size: ${p => p.theme.units(2)};
        line-height: ${p => p.theme.units(3)};
        font-weight: 400;
      }
      #actions {
        display: none;
        justify-content: space-between;
      }
      &:hover #file { display: none; }
      &:hover #actions { display: flex; }
    `
    const DocThumb = () => <ShadowBox>
      <DocThumbWrap>
        <div id='file'>
          <div id='extension'>.{srcExt}</div>
          <div id='sourceName'>{srcName}</div>
        </div>
        <div id='actions'>
          <Button
            minor
            onClick={() => {
              window.open(props.src, '_blank')
              window.focus()
            }}>
            Télécharger</Button>
          <Button
            onClick={this.triggerFileWindow}>
            Modifier</Button>
        </div>
      </DocThumbWrap>
    </ShadowBox>

    // Wrapper
    const CurrFileWrap = styled.div`
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      display: ${!props.src || state.filename ? 'none' : 'block'};
      border-radius: ${p => p.theme.units(1)};
      #image {
        max-height: 300px;
        border-radius: ${p => p.theme.units(1)};
        background-color: ${p => p.theme.colors.dimBg};
      }
    `
    const CurrentFile = () => <CurrFileWrap>
      { srcExt.match(imgExtRegexp) ?
        <ImageFile src={props.src} /> :
        <DocThumb src={props.src} />
      }
    </CurrFileWrap>

    /* * * * * * * * * * * * * * * * * * *
     *
     *  Return whole component
     *
     * * * * * * * * * * * * * * * * * * */
    const Wrapper = styled.div`
      width: 100%;
      box-sizing: border-box;
    `
    return <Wrapper {...props}>
      { props.label ? <InputLabel>Label</InputLabel> : null }
      <FakeInput placeholder={props.placeholder} />
      <CurrentFile src={props.src} />
      { /*!props.src || state.filename ?
        <FakeInput placeholder={props.placeholder} /> :
        <CurrentFile src={props.src} />
      */ }
    </Wrapper>
  }
}

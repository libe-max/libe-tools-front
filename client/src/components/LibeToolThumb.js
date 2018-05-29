import React, { Component } from 'react'
import styled from 'styled-components'
import ShadowBox from './ShadowBox'
import Image from './Image'
import BlockTitle from './BlockTitle'
import Paragraph from './Paragraph'
import Button from './Button'

export default class LibeToolThumb extends Component {
  render () {
    const props = this.props
    const LibeToolThumb = styled.div`
      > .shadow-box > .image {
        display: none;
      }
    `
    return (
      <LibeToolThumb {...props}>
        <ShadowBox className='shadow-box'>
          <Image className='image' src='/images/libe-tool-thumb-image.jpg' />
          <BlockTitle />
          <Paragraph />
          <Button>Voir tous</Button>
          <Button>Éditer un nouveau module</Button>
        </ShadowBox>
      </LibeToolThumb>
    )
  }
}

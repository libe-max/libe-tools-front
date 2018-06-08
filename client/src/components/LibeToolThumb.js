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
      #image {
        width: 100%;
        height: ${p => p.theme.units(20)};
      }
      #content { padding: ${p => p.theme.units(2)}; }
      #title { margin-bottom: ${p => p.theme.units(1)}; }
      #description { margin-bottom: ${p => p.theme.units(2)}; }
      #actions {
        display: flex;
        justify-content: space-between;
      }
      #actions > button:first-child { margin-right: ${p => p.theme.units(2)}; }
    `
    return <LibeToolThumb {...props}>
      <ShadowBox>
        <Image
          src='/images/libe-tool-thumb-image.jpg'
          position='top left'
          alt='Tool thumbnail'
          title='Tool thumbnail'
          id='image' />
        <div id='content'>
          <BlockTitle
            id='title'>
            Libé box
          </BlockTitle>
          <Paragraph
            id='description'>
            Lorem ipsum dolor sit amet consectutor...
          </Paragraph>
          <div id='actions'>
            <Button minor>
              Voir tous
            </Button>
            <Button>
              Éditer un nouveau module
            </Button>
          </div>
        </div>
      </ShadowBox>
    </LibeToolThumb>
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'
import ShadowBox from '../../boxes/ShadowBox'
import Image from '../Image'
import BlockTitle from '../../text-levels/BlockTitle'
import Paragraph from '../../text-levels/Paragraph'
import Button from '../../buttons/Button'

export default class LibeToolThumb extends Component {
  render () {
    const props = this.props
    const LibeToolThumb = styled.div`
      width: 100%;
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
            <Button tabIndex='-1' minor>
              Voir tous
            </Button>
            <Button tabIndex='-1'>
              Créer
            </Button>
          </div>
        </div>
      </ShadowBox>
    </LibeToolThumb>
  }
}

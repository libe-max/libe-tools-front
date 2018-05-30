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
      > [rel='shdBx'] > [rel='img'] {
        width: 100%;
        height: ${props => props.theme.units(20)};
      }
      > [rel='shdBx'] > [rel='ctntWrppr'] {
        padding: ${props => props.theme.units(2)};
      }
      > [rel='shdBx'] > [rel='ctntWrppr'] > [rel='blckTtl'] {
        margin-bottom: ${props => props.theme.units(1)};
      }
      > [rel='shdBx'] > [rel='ctntWrppr'] > [rel='prgrph'] {
        margin-bottom: ${props => props.theme.units(2)};
      }
      > [rel='shdBx'] > [rel='ctntWrppr'] > [rel='actnsWrppr'] {
        display: flex;
        justify-content: space-between;
      }
      > [rel='shdBx'] > [rel='ctntWrppr'] > [rel='actnsWrppr'] > button:first-child {
        margin-right: ${props => props.theme.units(2)};
      }
    `
    return (
      <LibeToolThumb {...props}>
        <ShadowBox rel='shdBx'>
          <Image
            src='/images/libe-tool-thumb-image.jpg'
            position='top left'
            alt='Tool thumbnail'
            title='Tool thumbnail'
            rel='img' />
          <div rel='ctntWrppr'>
            <BlockTitle
              rel='blckTtl'>
              Libé box
            </BlockTitle>
            <Paragraph
              rel='prgrph'>
              Lorem ipsum dolor sit amet consectutor...
            </Paragraph>
            <div rel='actnsWrppr'>
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
    )
  }
}

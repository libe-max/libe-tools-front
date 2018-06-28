import React, { Component } from 'react'
import ShadowBox from '../../boxes/ShadowBox'
import Image from '../../images/Image'
import BlockTitle from '../../text-levels/BlockTitle'
import Paragraph from '../../text-levels/Paragraph'
import Button from '../../buttons/Button'
import Wrapper from './style'

/*
 *   Libé tool thumb component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   A block displaying information about tools for users
 *   to build bundles
 *
 *   PROPS
 *   title, description, image
 *
 */

export default class LibeToolThumb extends Component {
  render () {
    const props = this.props
    return <Wrapper className='libe-tool-thumb'>
      <ShadowBox>
        <Image
          src={props.image}
          position='top left'
          alt='Tool thumbnail'
          title='Tool thumbnail' />
        <div className='libe-tool-thumb__content'>
          <BlockTitle>{props.title}</BlockTitle>
          <Paragraph>{props.description}</Paragraph>
          <div className='libe-tool-thumb__actions'>
            <Button tabIndex='-1' minor>Voir tous</Button>
            <Button tabIndex='-1'>Créer</Button>
          </div>
        </div>
      </ShadowBox>
    </Wrapper>
  }
}

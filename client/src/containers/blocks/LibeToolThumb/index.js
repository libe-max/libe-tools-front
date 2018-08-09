import { connect } from 'react-redux'
import { state2props, dispatch2props } from './connected'

import React, { Component } from 'react'
import ShadowBox from '../../../components/boxes/ShadowBox'
import Image from '../../../components/images/Image'
import BlockTitle from '../../../components/text-levels/BlockTitle'
import Paragraph from '../../../components/text-levels/Paragraph'
import Button from '../../../components/buttons/Button'
import Wrapper from './style'

/*
 *   Libé tool thumb container
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   A block displaying information about tools for users
 *   to build bundles
 *
 *   PROPS
 *   name, type, description, image
 *
 */

class LibeToolThumb extends Component {
  render () {
    const props = this.props

    return <Wrapper className='libe-tool-thumb' onClick={props.createNewBundle}>
      <ShadowBox>
        <Image
          src={props.image}
          position='center'
          alt='Tool thumbnail'
          title='Tool thumbnail' />
        <div className='libe-tool-thumb__content'>
          <BlockTitle>{props.name}</BlockTitle>
          <Paragraph>{props.description}</Paragraph>
          <div className='libe-tool-thumb__actions'>
            <Button onClick={props.filterBundles} tabIndex='-1' minor>Voir tous</Button>
            <Button onClick={props.createNewBundle} tabIndex='-1'>Créer</Button>
          </div>
        </div>
      </ShadowBox>
    </Wrapper>
  }
}

export default connect(
  state2props,
  dispatch2props
)(LibeToolThumb)

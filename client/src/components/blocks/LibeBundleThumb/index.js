import React, { Component } from 'react'
import ShadowBox from '../../boxes/ShadowBox'
import Image from '../Image'
import ParagraphTitle from '../../text-levels/ParagraphTitle'
import Wrapper from './style'

export default class LibeBundleThumb extends Component {
  render () {
    const props = this.props
    let classes = 'libe-bundle-thumb'
    if (props.loading) classes += ' libe-bundle-thumb_loading'
    return <Wrapper {...props} className={classes}>
      <ShadowBox>
        <div className='libe-bundle-thumb__top'>
          <div className='libe-bundle-thumb__image-placeholder' />
          <div className='libe-bundle-thumb__image-slot'>
            <Image position='center' src={props.image} />
          </div>
          <ParagraphTitle>{props.title}</ParagraphTitle>
        </div>
      </ShadowBox>
    </Wrapper>
  }
}

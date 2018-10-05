import React, { Component } from 'react'

import LibeIconSignature from '../LibeIconSignature'

import Wrapper from './style'

export default class NoDisplay extends Component {
  render () {
    const { props } = this
    const fontSize = 50 / 1080 * (props.width || 370)

    const classes = [`libe-insta-no-display-slide`]
    return <Wrapper
      className={classes.join(` `)}
      innerRef={node => this.$wrapper = node}>
      <div className='libe-insta-no-display-slide__safe-zone' />
      <div
        style={{fontSize: `${fontSize}px`}}
        className='libe-insta-no-display-slide__info-text'>
        Choisissez une mise en page ci-dessus
      </div>
      <div className='libe-insta-no-display-slide__icon-signature'>
        <LibeIconSignature />
      </div>
    </Wrapper>
  }
}

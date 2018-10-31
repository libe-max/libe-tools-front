import React, { Component } from 'react'

import LibeIconSignature from '../LibeIconSignature'

import Wrapper from './style'

export default class NoDisplay extends Component {
  render () {
    const { props } = this
    const fontSize = 90 / 1080 * (props.width || 370)
    const rootClass = `libe-insta-no-display-slide`
    const classes = [rootClass]
    return <Wrapper
      className={classes.join(` `)}
      innerRef={node => { this.$wrapper = node }}>
      <div className={`${rootClass}__safe-zone`} />
      <div
        style={{fontSize: `${fontSize}px`}}
        className={`${rootClass}__info-text`}>
        Choisissez une mise en page ci-dessus
      </div>
      <div className={`${rootClass}__icon-signature`}>
        <LibeIconSignature />
      </div>
    </Wrapper>
  }
}

import React, { Component } from 'react'

import Wrapper from './style'

export default class DisplayPanel extends Component {
  render () {
    const props = this.props
    const latestSettings = props.latestSettings
    const makeHex = color => color
      .match(/^#([0-9a-f]{3}){1,2}$/i)
      ? color
      : null
    const text = latestSettings.text
    const color = latestSettings.color ? makeHex(latestSettings.color) : null
    const style = (text && color) ? { style: { color } } : ``

    const classes = ['libe-yellow-word-display-panel']
    if (!text) classes.push('libe-yellow-word-display-panel_empty')

    return <Wrapper {...style} className={classes.join(' ')}>
      {props.latestSettings.text || 'Entrez un texte'}
    </Wrapper>
  }
}

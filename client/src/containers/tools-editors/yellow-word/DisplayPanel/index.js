import React, { Component } from 'react'

import Wrapper from './style'

import { getBundleCurrentSettings } from '../../../../_config/bundles'

export default class DisplayPanel extends Component {
  render () {
    const props = this.props

    const classes = ['libe-yellow-word-display-panel']
    if (!props.latestSettings.text) classes.push('libe-yellow-word-display-panel_empty')

    return <Wrapper className={classes.join(' ')}>
      {props.latestSettings.text || 'Entrez un texte'}
    </Wrapper>
  }
}

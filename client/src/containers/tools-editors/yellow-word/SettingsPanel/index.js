import React, { Component } from 'react'

import TextInput from '../../../../components/inputs/TextInput'

export default class SettingsPanel extends Component {
  componentDidUpdate () {
    const props = this.props
    this.textInput.input.value = props.latestSettings.text || ''
    this.colorInput.input.value = props.latestSettings.color || ''
  }

  render () {
    const props = this.props
    const classes = ['libe-yellow-word-settings-panel']
    return <ul className={classes.join(' ')}>
      <li><TextInput
        label='Texte'
        ref={node => { this.textInput = node }}
        onChange={e => props.dispatchEdition(e, 'text')}
        defaultValue={props.latestSettings.text || ''}
        placeholder='Tapez votre texte ici' />
      </li>
      <li><TextInput
        label='Couleur'
        ref={node => { this.colorInput = node }}
        onChange={e => props.dispatchEdition(e, 'color')}
        defaultValue={props.latestSettings.color || ''}
        placeholder='Tapez un code hexadecimal (ex : #FF0000)' />
      </li>
    </ul>
  }
}

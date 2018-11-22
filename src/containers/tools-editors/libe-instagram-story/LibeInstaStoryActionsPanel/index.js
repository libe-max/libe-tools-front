import React, { Component } from 'react'
import download from 'downloadjs'

import Button from '../../../../components/buttons/Button'
import Paragraph from '../../../../components/text-levels/Paragraph'

import Wrapper from './style'

export default class LibeInstaStoryActionsPanel extends Component {
  constructor () {
    super()
    this.state = { exporting: false }
    this.rootClass = 'libe-insta-story-settings'
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    const { props, state, handleClick } = this
    const { unsavedSettings } = props

    /* Assign classes to component */
    const r = this.rootClass
    const classes = [r]
    if (state.exporting) classes.push(`${r}_exporting`)

    /* Display */
    return <Wrapper
      className={classes.join(' ')}>
      <div className={`${r}__export-button`}>
        <Button
          minor
          primary
          onClick={handleClick}
          disabled={unsavedSettings
            ? 'Enregistrez les modifications'
            : false}>
          Exporter
        </Button>
      </div>
      <div className={`${r}__exporting-message`}>
        <Paragraph light small>Export en cours</Paragraph>
        <img src='/images/loader.gif' alt='Loader' />
      </div>
    </Wrapper>
  }

  handleClick (e) {
    const { props: {
      id, pushNotification
    } } = this
    this.setState({ exporting: true })
    return fetch(`/api/build/${id}`)
      .then(r => r.json())
      .then(json => {
        if (json.err) throw new Error(json.err)
        else {
          fetch(json.data)
            .then(r => r.blob())
            .then(blob => download(blob, 'story.zip'))
            .catch(e => console.log(e))
        }
      })
      .catch(e => pushNotification(
        `Une erreur est survenue lors de l'export. Le serveur a répondu : ${e.message}`,
        'error'
      ))
      .finally(() => this.setState({ exporting: false }))
  }
}

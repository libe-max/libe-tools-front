import React, { Component } from 'react'

import Button from '../../../../components/buttons/Button'

import Wrapper from './style'

export default class LibeInstaStorySavedActionsPanel extends Component {
  render () {
    const { props } = this
    const { id } = props
    const handleClick = e => fetch(`/api/build/${id}`)
      .then(r => r.blob())
      .then(res => console.log(res))
      .catch(e => console.log(e))
    return <Wrapper>
      <Button
        primary
        onClick={handleClick}>Exporter</Button>
    </Wrapper>
  }
}

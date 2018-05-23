import React, { Component } from 'react'
import styled from 'styled-components'

export default class BundlesList extends Component {
  render () {
    const BundlesList = styled.ul`
      background: yellow;
    `
    const bundles = this.props.bundles.map((bundle, i) => {
      return (
        <li key={i}>
          <span>{bundle.text}</span> – <span>{bundle.type}</span>
        </li>
      )
    })

    return (
      <BundlesList>
        {bundles}
      </BundlesList>
    )
  }
}

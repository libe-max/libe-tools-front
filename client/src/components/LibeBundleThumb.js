import React, { Component } from 'react'
import styled from 'styled-components'

export default class LibeBundleThumb extends Component {
  componentWillMount() {
    
  }

  render () {
    const props = this.props
    const LibeBundleThumb = styled.div`
      background: red;
      height: 100px;
      width: 100px;
    `
    return props.loading ? (
      <LibeBundleThumb>
        Loading...
      </LibeBundleThumb>
    ) : (
      <LibeBundleThumb>
        Bundle thumb
      </LibeBundleThumb>
    )
  }
}

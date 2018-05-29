import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import BundlesList from './BundlesList'

export default class ToolPage extends Component {
  // componentDidMount () {
  //   this.props.fetchBundles()
  // }

  render () {
    const createNewBundle = this.props.createNewBundle
    const ToolPage = styled.div`padding: 0 2rem;`
    return (
      <ToolPage>
        <Button text='New module' onClick={createNewBundle} />
        <BundlesList />
      </ToolPage>
    )
  }

  // render () {
  //   const createNewBundle = this.props.createNewBundle
  //   const fetchBundles = this.props.fetchBundles
  //   const type = this.props.type
  //   const loading = this.props.loading
  //   const error = this.props.error
  //   const bundles = this.props.bundles
  //   const ToolPage = styled.div`
  //     padding: 0 2rem;
  //   `
  //   return (
  //     <ToolPage>
  //       <Button text='New module' onClick={createNewBundle} />
  //       <BundlesList
  //         bundles={bundles}
  //         loading={loading}
  //         error={error}
  //         fetchBundles={fetchBundles} />
  //     </ToolPage>
  //   )
  // }
}

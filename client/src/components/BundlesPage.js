import React, { Component } from 'react'
import BundlesList from './BundlesList'

export default class BundlesPage extends Component {
  componentDidMount () {
    this.props.fetchBundles()
  }

  render () {
    const bundles = this.props.bundles
    return (
      <div>
        <BundlesList
          bundles={bundles} />
      </div>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

export default class BundlesList extends Component {
  render () {
    const fetchBundles = this.props.fetchBundles
    const BundlesList = styled.ul``
    const Loader = styled.div`color: #ccc; font-style: italic`
    const Err = styled.div`color: coral; font-style: italic`
    
    const bundles = this.props.bundles.map((bundle, i) => (
      <li key={i}>
        <span>{bundle.name}</span> – <span>{bundle.type}</span>
      </li>
    ))

    const conditionalDisplay = (() => {
      if (this.props.error) return (<div>
        <Err>Error while loading data. <button onClick={fetchBundles}>Try again?</button></Err>
        <BundlesList>{bundles}</BundlesList>
      </div>)
      else if (this.props.loading) return (<div>
        <Loader>{bundles.length === 0 ? 'Loading...' : 'Refreshing data...'}</Loader>
        <BundlesList>{bundles}</BundlesList>
      </div>)
      else if (bundles.length === 0) return <div>empty</div>
      else return <BundlesList>{bundles}</BundlesList>
    })()

    return conditionalDisplay
  }
}

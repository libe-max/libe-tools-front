import React from 'react'
import Button from './Button'
import BundlesList from './BundlesList'

const ToolPage = ({type, createNewBundle, bundles}) => (
  <div>
    <Button
      text={`Create a new ${type.replace(/-/, ' ')} module`}
      onClick={createNewBundle} />
    <BundlesList
      bundles={bundles} />
  </div>
)

export default ToolPage

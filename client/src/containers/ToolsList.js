import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ToolsList extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/tools/dumb-image-creator'>Dumb image creator</Link></li>
          <li><Link to='/tools/lolilol-creator'>Lolilol</Link></li>
          <li><Link to='/tools/some-other-tool'>Some other tool</Link></li>
        </ul>
      </div>
    )
  }
}

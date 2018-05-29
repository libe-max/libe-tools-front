import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/tools/dumb-image'>Dumb image creator</Link></li>
          <li><Link to='/tools/some-module'>Some module creator</Link></li>
          <li><Link to='/tools/some-other-tool'>Some other tool</Link></li>
        </ul>
      </div>
    )
  }
}

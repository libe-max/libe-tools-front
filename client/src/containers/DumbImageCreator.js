import React, { Component } from 'react'

export default class DumbImageCreator extends Component {
  render () {
    return <div>dumb image creator</div>
  }
  // constructor () {
  //   super()
  //   this.createNew = this.createNew.bind(this)
  // }

  // componentDidMount () {
  //   fetch('/api/dumb-image/list', {
  //     method: 'POST'
  //   }).then(r => r.text())
  //     .then(res => { console.log(res) })
  //     .catch(err => { console.log(err) })
  // }

  // render () {
  //   return (
  //     <div>
  //       <button onClick={this.createNew}>
  //         Create a new dumb image!
  //       </button>
  //       <ul>
  //         <li>A dumb image</li>
  //         <li>Another dumb image</li>
  //         <li>Some dumb image made in the past</li>
  //       </ul>
  //     </div>
  //   )
  // }

  // createNew () {
  //   fetch('/api/dumb-image/create', {
  //     method: 'POST'
  //   }).then(r => r.text())
  //     .then(res => { console.log(res) })
  //     .catch(err => { console.log(err) })
  // }
}

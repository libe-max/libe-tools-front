import React, { Component } from 'react'

import Wrapper from './style'

export default class LibeInstaSlideWysiwyg extends Component {
  render () {
    const { props } = this

    const randomEdit = e => {
      const key = Math.floor(Math.random() * 10e10).toString(36)
      const val = Math.floor(Math.random() * 10e10).toString(36)
      return props.dispatchEdition(key, val)
    }

    const propsList = Object.entries(props).map(([key, val]) => {
      return <tr>
        <td>{key}</td>
        <td>{val.toString()}</td>
      </tr>
    })

    const classes = ['libe-insta-slide-wysiwyg']
    return <Wrapper
      innerRef={node => this.$wrapper = node}
      className={classes.join(' ')}>
      <h3 className='coucou'>Page de type {this.props.display}</h3>
      <button onClick={randomEdit}>Dispatch random stuff</button>
      <h4>Liste des props</h4>
      <table>
        <thead>
          <tr>
            <td>prop</td>
            <td>value</td>
          </tr>          
        </thead>
        <tbody>
          {propsList}
        </tbody>
      </table>
    </Wrapper>
  }
}

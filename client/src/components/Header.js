import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Header extends Component {
  render () {
    const Wrapper = styled.div`
      padding: 2rem;
      border-bottom: 1px solid #ccc;
      margin-bottom: 2rem;
      line-height: 1rem;
      display: flex;
      flex-align: center;
      > * { margin: 0 10px; }
      > *:first-child { margin-left: 0; }
      > *:last-child { margin-right: 0; }
      > a > img { height: 1rem; }
    `
    return (
      <Wrapper>
        <Link to='/'>
          <img
            src='/images/libe-logo-shape.svg'
            alt='Logo de libération'
            title='Logo de libération' />
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/builds'>List of all builds</Link>
      </Wrapper>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'
import MainTitle from '../components/MainTitle'
import BlockTitle from '../components/BlockTitle'
import Header from '../components/Header'
import LibeToolThumb from '../components/LibeToolThumb'

const CpBx = ({title, width, children}) => {
  const CpBx = styled.div`
    display: ${width ? 'inline-block' : 'block'};
    width: ${width ? `${width * 100}%` : '100%'};
    box-sizing: border-box;
    padding: 
      ${props => props.theme.units(2)} 
      ${props => props.theme.units(1)};
    > #title {
      font-family: ${props => props.theme.fonts.main};
      color: ${props => props.theme.colors.grey};
      margin-bottom: ${props => props.theme.units(1)};
    }
  `
  return (
    <CpBx>
      <div id='title'>{title}</div>
      <div>{children}</div>
    </CpBx>
  )
}

export default class ComponentsPage extends Component {
  render () {
    const ComponentsPage = styled.div``
    return (
      <ComponentsPage>
        <CpBx title='Main title'><MainTitle>The quick brown fox</MainTitle></CpBx>
        <CpBx title='Block title'><BlockTitle>The quick brown fox</BlockTitle></CpBx>
        <CpBx title='Header'><Header /></CpBx>
        <CpBx title='Libé tool thumb'><LibeToolThumb /></CpBx>
      </ComponentsPage>
    )
  }
}
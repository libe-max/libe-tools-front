import React, { Component } from 'react'

import BlockTitle from '../../../../../../components/text-levels/BlockTitle'
import Button from '../../../../../../components/buttons/Button'

import { ThemeProvider } from 'styled-components'
import theme from '../../../../../../theme'
import Wrapper from './style'

export default class ParamBox extends Component {
  rootClass = `libe-insta-param-box`

  render () {
    const { props } = this
    return <ThemeProvider theme={theme._shade}>
      <Wrapper className={this.rootClass}>
        <div className={`${this.rootClass}__head`}>
          <BlockTitle>{this.props.title}</BlockTitle>
          <Button icon='/images/close-icon.svg' onClick={props.handleClose} />
        </div>
        {this.props.children}
      </Wrapper>
    </ThemeProvider>
  }
}

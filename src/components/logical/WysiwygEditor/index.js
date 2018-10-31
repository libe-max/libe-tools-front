import React, { Component } from 'react'

import { withTheme } from 'styled-components'

import Wrapper from './style'

class WysiwygEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initDomRootStyles: props.domRoot.style,
      active: false
    }
    this.setActiveStyle = this.setActiveStyle.bind(this)
    this.unsetActiveStyle = this.unsetActiveStyle.bind(this)
    this.activate = this.activate.bind(this)
    this.unactivate = this.unactivate.bind(this)
    this.handleMouseenterOnDomRoot = this.handleMouseenterOnDomRoot.bind(this)
    this.handleMouseleaveOnDomRoot = this.handleMouseleaveOnDomRoot.bind(this)
    props.domRoot.addEventListener('mouseenter', this.handleMouseenterOnDomRoot)
    props.domRoot.addEventListener('mouseleave', this.handleMouseleaveOnDomRoot)
    props.domRoot.addEventListener('click', props.activate)
  }

  componentDidMount () {
    if (this.state.active) return this.setActiveStyle()
    return this.unsetActiveStyle()
  }

  componentDidUpdate () {
    if (this.state.active) return this.setActiveStyle()
    return this.unsetActiveStyle()
  }

  componentWillUnmount () {
    const { props } = this
    props.domRoot.removeEventListener('mouseenter', this.setActiveStyle)
    props.domRoot.removeEventListener('mouseleave', this.unsetActiveStyle)
    props.domRoot.removeEventListener('click', props.activate)
  }

  render () {
    const r = 'wysiwyg-editor'
    const classes = [r]
    if (!this.state.active) classes.push(`${r}_inactive`)
    return <Wrapper className={classes.join(' ')}>
      <div className={`${r}__title`}>
        {this.props.title}
      </div>
      <div className={`${r}__close`}>
        <button onClick={this.unactivate}>Close</button>
      </div>
      <div className={`${r}__children`}>
        {this.props.children}
      </div>
    </Wrapper>
  }

  handleMouseenterOnDomRoot () {
    if (!this.state.active) this.setActiveStyle()
  }

  handleMouseleaveOnDomRoot () {
    if (!this.state.active) this.unsetActiveStyle()
  }

  setActiveStyle () {
    const { props: { domRoot, theme } } = this
    domRoot.style.boxShadow = `
      0 0 0 ${theme.units(0.75)} ${theme.colors.actionText},
      0 0 ${theme.units(8)} 0 ${theme.hexToRgba(theme.colors.actionText, 1)},
      inset 0 0 ${theme.units(80)} ${theme.hexToRgba(theme.colors.actionText, 0.4)}`
    domRoot.style.cursor = 'pointer'
  }
  
  unsetActiveStyle () {
    const {
      props: { domRoot },
      state: { initDomRootStyles }
    } = this
    domRoot.style = initDomRootStyles
  }

  activate () { this.setState({ active: true }) }
  unactivate () { this.setState({ active: false }) }
}

export default withTheme(WysiwygEditor)

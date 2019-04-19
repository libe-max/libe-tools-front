import React, { Component } from 'react'

import Button from '../../buttons/Button'
import ParagraphTitle from '../../text-levels/ParagraphTitle'

import { withTheme, ThemeProvider } from 'styled-components'
import Wrapper from './style'

/*
 *   Wysiwyg editor component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   This component applies a hover style to a given DOM
 *   element (props.domRoot), and pops a settings block
 *   when this DOM element is clicked.
 *
 *   PROPS
 *   title, domRoot, children, onActivate
 *
 */

class WysiwygEditor extends Component {
  constructor (props) {
    super(props)
    this.state = { active: false }
    this.initDomRootStyles = {
      boxShadow: props.domRoot ? props.domRoot.style.boxShadow : '',
      cursor: props.domRoot ? props.domRoot.style.cursor : ''
    }
    this.setActiveStyle = this.setActiveStyle.bind(this)
    this.unsetActiveStyle = this.unsetActiveStyle.bind(this)
    this.activate = this.activate.bind(this)
    this.unactivate = this.unactivate.bind(this)
    this.handleMouseenterOnDomRoot = this.handleMouseenterOnDomRoot.bind(this)
    this.handleMouseleaveOnDomRoot = this.handleMouseleaveOnDomRoot.bind(this)
    if (props.domRoot) {
      props.domRoot.addEventListener('mouseenter', this.handleMouseenterOnDomRoot)
      props.domRoot.addEventListener('mouseleave', this.handleMouseleaveOnDomRoot)
      props.domRoot.addEventListener('click', this.activate)
    }
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
    if (props.domRoot) {
      props.domRoot.removeEventListener('mouseenter', this.setActiveStyle)
      props.domRoot.removeEventListener('mouseleave', this.unsetActiveStyle)
      props.domRoot.removeEventListener('click', this.activate)
    }
  }

  render () {
    const r = 'wysiwyg-editor'
    const classes = [r]
    if (!this.state.active) classes.push(`${r}_inactive`)
    return <ThemeProvider theme={theme => theme._shade()}>
      <Wrapper
        innerRef={node => { this.$wrapper = node }}
        className={classes.join(' ')}>
        <div className={`${r}__title`}>
          <ParagraphTitle>{this.props.title}</ParagraphTitle>
        </div>
        <div className={`${r}__close`}>
          <Button
            icon='/images/close-icon.svg'
            onClick={this.unactivate} />
        </div>
        <div className={`${r}__children`}>
          {this.props.children}
        </div>
      </Wrapper>
    </ThemeProvider>
  }

  handleMouseenterOnDomRoot () {
    if (!this.state.active) this.setActiveStyle()
  }

  handleMouseleaveOnDomRoot () {
    if (!this.state.active) this.unsetActiveStyle()
  }

  setActiveStyle () {
    const { props: { domRoot, theme } } = this
    if (domRoot) {
      domRoot.style.boxShadow = theme.shadows.massiveFocus
      domRoot.style.cursor = 'pointer'
    }
  }

  unsetActiveStyle () {
    const {
      initDomRootStyles,
      props: { domRoot }
    } = this
    if (domRoot) {
      domRoot.style.boxShadow = initDomRootStyles.boxShadow
      domRoot.style.cursor = initDomRootStyles.cursor
    }
  }

  activate () {
    const { $wrapper, props: { onActivate } } = this
    if (onActivate && typeof onActivate === 'function') onActivate()
    this.setState({ active: true })
    setTimeout(() => {
      if (!$wrapper) return
      if (!$wrapper.querySelector('input')) return
      if (!$wrapper.querySelector('input').focus) return
      $wrapper.querySelector('input').focus()
    }, 10)
  }

  unactivate () {
    this.setState({ active: false })
  }
}

export default withTheme(WysiwygEditor)

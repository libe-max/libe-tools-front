import React, { Component } from 'react'

import Wrapper from './style'

export default class LibeInstaSlideWysiwyg extends Component {
  constructor () {
    super()
    // this.constrainProportions = this.constrainProportions.bind(this)
    // window.addEventListener(
    //   'resize',
    //   this.constrainProportions
    // )
  }

  // componentWillUnmount () {
  //   window.removeEventListener(
  //     'resize',
  //     this.constrainProportions
  //   )
  // }

  // constrainProportions () {
  //   if (!this.$wrapper) return
  //   const height = this.$wrapper.clientHeight
  //   const constrainedWidth = 9 * height / 16
  //   this.$wrapper.style.width = `${constrainedWidth}px`
  // }

  render () {
    // this.constrainProportions()
    const classes = ['libe-insta-slide-wysiwyg']
    return <Wrapper
      innerRef={node => this.$wrapper = node}
      className={classes.join(' ')}>
      <div className='coucou'>page {this.props.nb}</div>
    </Wrapper>
  }
}

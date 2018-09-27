import React, { Component } from 'react'

import proportionsConstrainerImage from './assets/9-16-constrainer.png'
import Wrapper from './style'

export default class LibeInstaStorySlideWysiwyg extends Component {
  render () {
    const classes = ['libe-instagram-story-slide-wysiwyg']

    return <Wrapper className={classes.join(' ')}>
      <div className='libe-instagram-story-slide-wysiwyg__proportion-constrainer'>
        <img src={proportionsConstrainerImage} />
      </div>
    </Wrapper>
  }
}

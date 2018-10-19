import React, { Component } from 'react'
import Paragraph from '../../text-levels/Paragraph'
import Wrapper from './style'

/*
 *   Notification component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Small component displaying text inside a blue or red
 *   box, depending on the props
 *
 *   PROPS
 *   children, danger
 *
 */

export default class Notification extends Component {
  render () {
    const props = this.props

    /* Assign classes to component */
    const classes = ['notification']
    if (props.danger) classes.push('notification_danger')

    /* Display */
    return <Wrapper className={classes.join(' ')}>
      {
        props.danger
          ? <Paragraph small error>{props.children}</Paragraph>
          : <Paragraph small action>{props.children}</Paragraph>
      }
    </Wrapper>
  }
}

import React, { Component } from 'react'
import Notification from '../../boxes/Notification'
import theme from '../../../theme.js'
import Wrapper from './style'

class NotificationSlot extends Component {
  constructor () {
    super()
    this.state = { fadeout: false }
    const timeout = 7000
    const transitionTime = theme.numericTransitions.medium
    setTimeout(() => {
      this.setState({ fadeout: true })
      setTimeout(() => {
        this.setState({ hide: true })
      }, transitionTime)
    }, timeout)
  }

  render () {
    const props = this.props
    const state = this.state
    const notif = props.notif

    /* Assign classes to component */
    const classes = ['notifications__notification-slot']
    if (state.fadeout) classes.push('notifications__notification-slot_fadeout')
    if (state.hide) classes.push('notifications__notification-slot_hide')

    /* Display */
    return <div className={classes.join(' ')}>
      {
        notif.level === 'error' ?
        <Notification danger>{notif.text}</Notification> :
        <Notification>{notif.text}</Notification>
      }
    </div>
  }
}

export default class Notifications extends Component {
  render () {
    const props = this.props
    const notificationsDom = props.notifications
      .map((notif, i) => <NotificationSlot
        key={i}
        notif={notif} />)
      .reverse()
    return <Wrapper className='notifications'>
      {notificationsDom}
    </Wrapper>
  }
}

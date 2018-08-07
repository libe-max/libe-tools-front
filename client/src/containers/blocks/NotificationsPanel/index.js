import { connect } from 'react-redux'
import { state2props, dispatch2props } from './connected'

import React, { Component } from 'react'
import Notification from '../../../components/boxes/Notification'
import Button from '../../../components/buttons/Button'
import theme from '../../../theme.js'
import Wrapper from './style'

/*
 *   Notification panel container
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   Panel fading in notifications as it recieves it via
 *   it's props, then waiting for 7 seconds, and finally
 *   fading them out
 *
 *   PROPS
 *   notifications
 *
 */

class NotificationSlot extends Component {
  constructor (props) {
    super(props)
    this.fadeOut = this.fadeOut.bind(this)
    this.hide = this.hide.bind(this)
    setTimeout(this.fadeOut, props.timeout)
  }

  fadeOut () {
    const transitionTime = this.props.transitionTime
    if (this.node) {
      this.node.classList
        .add('notifications-panel__notification-slot_fadeout')
      setTimeout(this.hide, transitionTime)
    }
  }

  hide () {
    if (this.node) {
      this.node.classList
        .add('notifications-panel__notification-slot_hide')
    }
  }

  render () {
    const props = this.props
    const notif = props.notif
    if (notif.level === 'error') {
      return <div
        ref={node => { this.node = node }}
        className='notifications-panel__notification-slot'>
        <Notification danger>{notif.text}</Notification>
        <div className='notifications-panel__hide-notification-slot'>
          <Button minor onClick={this.fadeOut} icon='/images/danger-small-close-icon.svg' />
        </div>
      </div>
    } else {
      return <div
        ref={node => { this.node = node }}
        className='notifications-panel__notification-slot'>
        <Notification>{notif.text}</Notification>
        <div className='notifications-panel__hide-notification-slot'>
          <Button minor onClick={this.fadeOut} icon='/images/action-small-close-icon.svg' />
        </div>
      </div>
    }
  }
}

class NotificationsPanel extends Component {
  render () {
    const props = this.props
    const timeout = 7000
    const transitionTime = theme.numericTransitions.medium
    const notificationsDom = props.notifications
      .map(notif => {
        const notifAge = Date.now() - notif.timestamp
        const hasTimedout = timeout + transitionTime - notifAge < 0
        if (hasTimedout) return null
        return <NotificationSlot
          key={notif.id}
          notif={notif}
          timeout={timeout}
          transitionTime={transitionTime} />
      }
      )
      .filter(notif => notif)
      .reverse()
    return <Wrapper className='notifications-panel'>
      {notificationsDom}
    </Wrapper>
  }
}

export default connect(
  state2props,
  dispatch2props
)(NotificationsPanel)

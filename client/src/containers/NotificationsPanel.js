import { connect } from 'react-redux'
import Component from '../components/blocks/NotificationsPanel'

const state2props = state => ({
  notifications: state.notifications
})

const dispatch2props = dispatch => ({
  
})

export default connect(
  state2props,
  dispatch2props
)(Component)

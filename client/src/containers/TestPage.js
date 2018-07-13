import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const Component = (props) => (
  <div onClick={props.goHome}>Coucou</div>
)

const state2props = state => ({
  
})

const dispatch2props = dispatch => ({
  goHome: () => {
    dispatch(push('/components'))
  }
})

export default connect(
  state2props,
  dispatch2props
)(Component)

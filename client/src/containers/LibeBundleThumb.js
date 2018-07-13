import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Component from '../components/blocks/LibeBundleThumb'

const state2props = state => ({
  
})

const dispatch2props = (dispatch, props) => ({
  navigateToBundle: e => {
    e.stopPropagation()
    dispatch(
      push(`/bundle/${props.bundleId}`)
    )
  },
  deleteBundle: e => {
    e.stopPropagation()
    alert('delete!')
  }
})

export default connect(
  state2props,
  dispatch2props
)(Component)

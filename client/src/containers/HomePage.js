import { connect } from 'react-redux'
import {
  fetchBundlesRequest,
  fetchBundlesSuccess,
  fetchBundlesError
} from '../actions/actionCreators'
import Component from '../pages/HomePage'

const state2props = state => ({
  bundles: state.bundles
})

const dispatch2props = dispatch => ({
  getBundles: () => {
    dispatch(fetchBundlesRequest())
    fetch('/api/get-all-bundles')
      .then(r => r.json())
      .then(res => {
        if (!res.err) dispatch(fetchBundlesSuccess(res.data))
        else dispatch(fetchBundlesError(res.err))
      })
      .catch(err => {
        dispatch(fetchBundlesError(err.toString()))
      })
  }
})

export default connect(
  state2props,
  dispatch2props
)(Component)

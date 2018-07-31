import { connect } from 'react-redux'
import {
  fetchBundlesRequest,
  fetchBundlesSuccess,
  fetchBundlesError,
  setToolsFilter,
  setBundlesFilter
} from '../actions/actionCreators'
import Component from '../pages/HomePage'

const state2props = state => ({
  bundles: state.bundles,
  filters: state.filters
})

const dispatch2props = dispatch => ({
  getBundles: () => {
    dispatch(fetchBundlesRequest())
    fetch('/api/get-all-bundles')
      .then(r => {
        if (r.ok) return r.json()
        throw new Error(`Error ${r.status}: ${r.statusText}`)
      })
      .then(res => {
        if (!res.err) dispatch(fetchBundlesSuccess(res.data))
        else dispatch(fetchBundlesError(res.err))
      })
      .catch(err => {
        dispatch(fetchBundlesError(err.message))
      })
  },
  setToolsFilter: e => {
    if (e && e.target) {
      dispatch(setToolsFilter(e.target.value))
    }
  },
  setBundlesFilter: e => {
    if (e && e.target) {
      dispatch(setBundlesFilter(e.target.value))
    }
  }
})

export default connect(
  state2props,
  dispatch2props
)(Component)

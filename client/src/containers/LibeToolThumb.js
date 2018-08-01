import { connect } from 'react-redux'
import {
  createBundleRequest,
  createBundleError,
  setBundlesFilter,
  pushNotification
} from '../actions/actionCreators'
import Component from '../components/blocks/LibeToolThumb'

const state2props = state => ({

})

const dispatch2props = (dispatch, props) => ({
  createNewBundle: e => {
    e.stopPropagation()
    dispatch(createBundleRequest())
    setTimeout(() => {
      const err = 'fake error'
      dispatch(createBundleError(err))
      dispatch(pushNotification(err))
    }, 1000)
  },
  filterBundles: e => {
    e.stopPropagation()
    dispatch(setBundlesFilter(props.type))
  }
})

export default connect(
  state2props,
  dispatch2props
)(Component)

import {
  CREATE_BUNDLE_REQUEST,
  CREATE_BUNDLE_SUCCESS,
  CREATE_BUNDLE_FAILURE
} from '../actions/actionTypes'

const bundleCreation = (state = {
  bundle: null,
  error: null,
  isFetching: false,
  receivedAt: null
}, action) => {
  switch (action.type) {
    case CREATE_BUNDLE_REQUEST:
      return Object.assign({}, state, {
        bundle: null,
        error: null,
        isFetching: true,
        receivedAt: null
      })
    case CREATE_BUNDLE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        bundle: action.bundle,
        receivedAt: Date.now()
      })
    case CREATE_BUNDLE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
        receivedAt: Date.now()
      })
    default:
      return state
  }
}

export default bundleCreation

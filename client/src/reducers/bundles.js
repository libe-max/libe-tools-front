import {
  FETCH_BUNDLES_REQUEST,
  FETCH_BUNDLES_SUCCESS,
  FETCH_BUNDLES_FAILURE
} from '../actions/actionTypes'

const bundles = (state = {
  list: [],
  error: null,
  isFetching: false,
  updatedAt: null
}, action) => {
  switch (action.type) {
    case FETCH_BUNDLES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_BUNDLES_SUCCESS:
      return Object.assign({}, state, {
        list: action.list,
        error: null,
        isFetching: false,
        updatedAt: Date.now()
      })
    case FETCH_BUNDLES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isFetching: false,
        updatedAt: Date.now()
      })
    default:
      return state
  }
}

export default bundles

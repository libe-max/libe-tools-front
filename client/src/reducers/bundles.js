import {
  FETCH_BUNDLES_REQUEST,
  FETCH_BUNDLES_SUCCESS,
  FETCH_BUNDLES_FAILURE,
  PUSH_IN_BUNDLES
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
    case PUSH_IN_BUNDLES:
      return Object.assign({}, state, {
        list: [...state.list, action.bundle]
      })
    default:
      return state
  }
}

export default bundles

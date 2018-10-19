import {
  FETCH_BUNDLES_REQUEST,
  FETCH_BUNDLES_SUCCESS,
  FETCH_BUNDLES_FAILURE
} from '../../actions/actionTypes'

const fetchBundles = (state, action) => {
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
        updatedAt: action.updatedAt
      })
    case FETCH_BUNDLES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isFetching: false,
        updatedAt: action.updatedAt
      })
    default:
      return state
  }
}

export default fetchBundles

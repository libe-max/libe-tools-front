import {
  FETCH_BUNDLE_REQUEST,
  FETCH_BUNDLE_SUCCESS,
  FETCH_BUNDLE_FAILURE
} from '../../actions/actionTypes'

const fetchBundle = (state, action) => {
  switch (action.type) {
    case FETCH_BUNDLE_REQUEST:
      return state
    case FETCH_BUNDLE_SUCCESS:
      return Object.assign({}, state, {
        list: [...state.list.map(bundle => {
          const id1 = bundle._id
          const id2 = action.bundle._id
          return (id1 !== id2) ? bundle : undefined
        }), action.bundle].filter(elt => elt)
      })
    case FETCH_BUNDLE_FAILURE:
      return state
    default:
      return state
  }
}

export default fetchBundle

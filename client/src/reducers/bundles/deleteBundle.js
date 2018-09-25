import {
  DELETE_BUNDLE_REQUEST,
  DELETE_BUNDLE_SUCCESS,
  DELETE_BUNDLE_FAILURE
} from '../../actions/actionTypes'

const deleteBundle = (state, action) => {
  switch (action.type) {
    case DELETE_BUNDLE_REQUEST:
      return Object.assign({}, state, {
        deleting: [
          ...state.deleting,
          action.id
        ]
      })
    case DELETE_BUNDLE_SUCCESS:
      return Object.assign({}, state, {
        list: state.list
          .filter(bundle => bundle._id !== action.id),
        changes: state.changes
          .filter(bundle => bundle._id !== action.id),
        deleting: state.deleting
          .filter(id => id !== action.id)
      })
    case DELETE_BUNDLE_FAILURE:
      return Object.assign({}, state, {
        deleting: state.deleting
          .filter(id => id !== action.id)
      })
    default:
      return state
  }
}

export default deleteBundle

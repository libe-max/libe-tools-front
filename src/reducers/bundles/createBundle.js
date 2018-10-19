import {
  CREATE_BUNDLE_REQUEST,
  CREATE_BUNDLE_SUCCESS,
  CREATE_BUNDLE_FAILURE
} from '../../actions/actionTypes'

const createBundle = (state, action) => {
  switch (action.type) {
    case CREATE_BUNDLE_REQUEST:
      return Object.assign({}, state, {
        isCreating: true
      })
    case CREATE_BUNDLE_SUCCESS:
      return Object.assign({}, state, {
        isCreating: false,
        list: [...state.list.map(bundle => {
          const id1 = bundle._id
          const id2 = action.bundle._id
          return (id1 !== id2) ? bundle : undefined
        }), action.bundle].filter(elt => elt)
      })
    case CREATE_BUNDLE_FAILURE:
      return Object.assign({}, state, {
        isCreating: false
      })
    default:
      return state
  }
}

export default createBundle

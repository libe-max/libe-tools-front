import {
  FETCH_BUNDLES_REQUEST,
  FETCH_BUNDLES_SUCCESS,
  FETCH_BUNDLES_FAILURE,
  FETCH_BUNDLE_REQUEST,
  FETCH_BUNDLE_SUCCESS,
  FETCH_BUNDLE_FAILURE,
  CREATE_BUNDLE_REQUEST,
  CREATE_BUNDLE_SUCCESS,
  CREATE_BUNDLE_FAILURE,
  SAVE_BUNDLE_REQUEST,
  SAVE_BUNDLE_SUCCESS,
  SAVE_BUNDLE_FAILURE,
  EDIT_BUNDLE_GENERAL_SETTING
} from '../actions/actionTypes'

const bundles = (state = {
  list: [],
  unsavedList: [],
  error: null,
  isFetching: false,
  isCreating: false,
  updatedAt: null
}, action) => {
  switch (action.type) {

    /* Fetching many */
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

    /* Fetching one */
    case FETCH_BUNDLE_REQUEST:
      return state
    case FETCH_BUNDLE_SUCCESS:
      return Object.assign({}, state, {
        list: [...state.list.map(bundle => {
          const id1 = bundle._id
          const id2 = action.bundle._id
          return (id1 !== id2) ? bundle : action.bundle
        })]
      })
    case FETCH_BUNDLE_FAILURE:
      return state

    /* Creating */
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
          return (id1 !== id2) ? bundle : action.bundle
        })]
      })
    case CREATE_BUNDLE_FAILURE:
      return Object.assign({}, state, {
        isCreating: false
      })

    /* Save bundle */
    case SAVE_BUNDLE_REQUEST:
      return state
    case SAVE_BUNDLE_SUCCESS:
      return Object.assign({}, state, {
        list: [...state.list.map(bundle => {
          const id1 = bundle._id
          const id2 = action.bundle._id
          return (id1 !== id2) ? bundle : action.bundle
        })]
      })
    case SAVE_BUNDLE_FAILURE:
      return state

    /* Bundle settings */
    case EDIT_BUNDLE_GENERAL_SETTING:
      const savedBundle = state.list.map(bundle => {
        return bundle._id === action.id ? bundle : undefined
      }).filter(elt => elt)[0]
      const unsavedBundle = state.unsavedList.map(bundle => {
        return bundle._id === action.id ? bundle : undefined
      }).filter(elt => elt)[0] || savedBundle
      if (!unsavedBundle) return state
      const editedBundle = Object.assign({}, unsavedBundle, {
        [action.key]: action.value
      })
      return Object.assign({}, state, {
        unsavedList: [
          ...state.unsavedList.map(bundle => {
            const id1 = bundle._id
            const id2 = action.id
            return (id1 !== id2) ? bundle : undefined
          }).filter(elt => elt),
          editedBundle
        ]
      })
    default:
      return state
  }
}

export default bundles

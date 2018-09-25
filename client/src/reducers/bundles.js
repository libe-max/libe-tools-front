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

  EDIT_BUNDLE,

  DELETE_BUNDLE_REQUEST,
  DELETE_BUNDLE_SUCCESS,
  DELETE_BUNDLE_FAILURE
} from '../actions/actionTypes'

import { getBundleCurrentSettings } from '../_config/bundles'

const bundles = (state = {
  list: [],
  changes: [],
  deleting: [],
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
          return (id1 !== id2) ? bundle : undefined
        }), action.bundle].filter(elt => elt)
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
          return (id1 !== id2) ? bundle : undefined
        }), action.bundle].filter(elt => elt)
      })
    case CREATE_BUNDLE_FAILURE:
      return Object.assign({}, state, {
        isCreating: false
      })

    /* Save bundle */
    case SAVE_BUNDLE_REQUEST:
      return Object.assign({}, state, {
        changes: [...state.changes.map(bundleChanges => {
          const id1 = bundleChanges._id
          const id2 = action.id
          return (id1 !== id2) ? bundleChanges : {
            ...bundleChanges,
            _saving: true
          }
        })]
      })
    case SAVE_BUNDLE_SUCCESS:
      return Object.assign({}, state, {
        list: [...state.list.map(bundle => {
          const id1 = bundle._id
          const id2 = action.bundle._id
          return (id1 !== id2) ? bundle : undefined
        }), action.bundle].filter(elt => elt),
        changes: [...state.changes.filter(bundleChanges => {
          const id1 = bundleChanges._id
          const id2 = action.bundle._id
          return (id1 !== id2)
        })]
      })
    case SAVE_BUNDLE_FAILURE:
      return Object.assign({}, state, {
        changes: [...state.changes.map(bundleChanges => {
          const id1 = bundleChanges._id
          const id2 = action.id
          const cleanedBundleChanges = {...bundleChanges}
          delete cleanedBundleChanges._saving
          return (id1 !== id2) ? bundleChanges : cleanedBundleChanges
        })]
      })

    /* Edit bundle */
    case EDIT_BUNDLE:
      const { id, key, value } = action
      if (key === 'timestamp') return state

      const stored = state.list.filter(bundle => bundle._id === id)[0]
      const storedSettings = getBundleCurrentSettings(stored)
      const changes = state.changes.filter(bundleChanges => bundleChanges._id === id)[0] || { _id: id }
      const newChanges = Object.assign({}, changes, { [key]: value })

      if (newChanges[key] === storedSettings[key]) delete newChanges[key]
      if (newChanges[key] === '' && !storedSettings[key]) delete newChanges[key]
      if (
        Object.keys(newChanges).length <= 1 ||
        !newChanges.hasOwnProperty('_id')
      ) {
        return Object.assign({}, state, {
          changes: [...state.changes.map(bundleChanges => {
            const id1 = bundleChanges._id
            const id2 = id
            return (id1 !== id2) ? bundleChanges : undefined
          })].filter(elt => elt)
        })
      }

      return Object.assign({}, state, {
        changes: [...state.changes.map(bundleChanges => {
          const id1 = bundleChanges._id
          const id2 = id
          return (id1 !== id2) ? bundleChanges : undefined
        }), newChanges].filter(elt => elt)
      })

    /* Delete bundle */
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

    /* Default */
    default: 
      return state
  }
}

export default bundles

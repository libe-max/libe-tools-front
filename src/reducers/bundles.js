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

import fetchBundles from './bundles/fetchBundles'
import fetchBundle from './bundles/fetchBundle'
import createBundle from './bundles/createBundle'
import saveBundle from './bundles/saveBundle'
import editBundle from './bundles/editBundle'
import deleteBundle from './bundles/deleteBundle'

const defaultState = {
  list: [],
  changes: [],
  deleting: [],
  error: null,
  isFetching: false,
  isCreating: false,
  updatedAt: null
}

const bundles = (state = defaultState, action) => {
  switch (action.type) {
    /* Fetching many */
    case FETCH_BUNDLES_REQUEST:
    case FETCH_BUNDLES_SUCCESS:
    case FETCH_BUNDLES_FAILURE:
      return fetchBundles(state, action)
    /* Fetching one */
    case FETCH_BUNDLE_REQUEST:
    case FETCH_BUNDLE_SUCCESS:
    case FETCH_BUNDLE_FAILURE:
      return fetchBundle(state, action)
    /* Creating */
    case CREATE_BUNDLE_REQUEST:
    case CREATE_BUNDLE_SUCCESS:
    case CREATE_BUNDLE_FAILURE:
      return createBundle(state, action)
    /* Save bundle */
    case SAVE_BUNDLE_REQUEST:
    case SAVE_BUNDLE_SUCCESS:
    case SAVE_BUNDLE_FAILURE:
      return saveBundle(state, action)
    /* Edit bundle */
    case EDIT_BUNDLE:
      return editBundle(state, action)
    /* Delete bundle */
    case DELETE_BUNDLE_REQUEST:
    case DELETE_BUNDLE_SUCCESS:
    case DELETE_BUNDLE_FAILURE:
      return deleteBundle(state, action)
    /* Default */
    default:
      return state
  }
}

export default bundles

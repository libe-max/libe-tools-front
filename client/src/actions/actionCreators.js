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
  DELETE_BUNDLE_FAILURE,

  SET_TOOLS_FILTER,
  SET_BUNDLES_FILTER,

  PUSH_NOTIFICATION
} from './actionTypes'

/* * * * * * * * * * * * * * * * * * * *
 *
 *  BUNDLES
 *
 * * * * * * * * * * * * * * * * * * * */

/* Fetching many */
export const fetchBundlesRequest = () => ({
  type: FETCH_BUNDLES_REQUEST
})

export const fetchBundlesSuccess = list => {
  return {
    type: FETCH_BUNDLES_SUCCESS,
    updatedAt: Date.now(),
    list
  }
}

export const fetchBundlesError = error => ({
  type: FETCH_BUNDLES_FAILURE,
  updatedAt: Date.now(),
  error
})

/* Fetching one */
export const fetchBundleRequest = id => ({
  type: FETCH_BUNDLE_REQUEST,
  id
})

export const fetchBundleSuccess = bundle => ({
  type: FETCH_BUNDLE_SUCCESS,
  updatedAt: Date.now(),
  bundle
})

export const fetchBundleError = error => ({
  type: FETCH_BUNDLE_FAILURE,
  updatedAt: Date.now(),
  error
})

/* Creating */
export const createBundleRequest = () => ({
  type: CREATE_BUNDLE_REQUEST
})

export const createBundleSuccess = bundle => ({
  type: CREATE_BUNDLE_SUCCESS,
  receivedAt: Date.now(),
  bundle
})

export const createBundleError = error => ({
  type: CREATE_BUNDLE_FAILURE,
  receivedAt: Date.now(),
  error
})

/* Saving */
export const saveBundleRequest = id => ({
  type: SAVE_BUNDLE_REQUEST,
  id
})

export const saveBundleSuccess = bundle => ({
  type: SAVE_BUNDLE_SUCCESS,
  bundle
})

export const saveBundleError = id => ({
  type: SAVE_BUNDLE_FAILURE,
  id
})

/* Editing */
export const editBundle = (id, key, value) => ({
  type: EDIT_BUNDLE,
  id,
  key,
  value
})

/* Deleting */
export const deleteBundleRequest = id => ({
  type: DELETE_BUNDLE_REQUEST,
  id
})

export const deleteBundleSuccess = id => ({
  type: DELETE_BUNDLE_SUCCESS,
  id
})

export const deleteBundleError = (id, error) => ({
  type: DELETE_BUNDLE_FAILURE,
  error,
  id
})

/* * * * * * * * * * * * * * * * * * * *
 *
 *  FILTERS
 *
 * * * * * * * * * * * * * * * * * * * */

/* Tools */
export const setToolsFilter = filter => ({
  type: SET_TOOLS_FILTER,
  filter
})

/* Bundles */
export const setBundlesFilter = filter => {
  document
    .querySelector('.home-page__bundles-panel')
    .querySelector('.search-field')
    .querySelector('input')
    .value = filter
  return {
    type: SET_BUNDLES_FILTER,
    filter
  }
}

/* * * * * * * * * * * * * * * * * * * *
 *
 *  NOTIFICATIONS
 *
 * * * * * * * * * * * * * * * * * * * */

/* Push */
export const pushNotification = (text, level) => ({
  type: PUSH_NOTIFICATION,
  timestamp: Date.now(),
  id: Math
    .floor(Math.random() * 10e9)
    .toString(36),
  text,
  level
})

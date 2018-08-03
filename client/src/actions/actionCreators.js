import {
  FETCH_BUNDLES_REQUEST,
  FETCH_BUNDLES_SUCCESS,
  FETCH_BUNDLES_FAILURE,
  CREATE_BUNDLE_REQUEST,
  CREATE_BUNDLE_SUCCESS,
  CREATE_BUNDLE_FAILURE,
  PUSH_IN_BUNDLES,
  SET_TOOLS_FILTER,
  SET_BUNDLES_FILTER,
  PUSH_NOTIFICATION
} from './actionTypes'

/* * * * * * * * * * * * * * * * * * * * 
 *
 *  BUNDLES
 *
 * * * * * * * * * * * * * * * * * * * */

/* Utilities */
const getBundleCurrentSettings = bundle => {
  const settingsHistory = bundle.settings_history || []
  const currentSettings = settingsHistory
    .sort((a, b) => {
      return (b.timestamp - a.timestamp)
    })[0]
  return currentSettings || {}
}
const bundleWithSlug = bundle => {
  const settings = getBundleCurrentSettings(bundle)
  const slug = [
    bundle._id,
    bundle.author,
    bundle.type,
    settings.name,
    settings.text,
    settings.title
  ].join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/igm, '-')
    .replace(/-{2,}/igm, '-')
    .replace(/-$/, '')
  return {
    ...bundle,
    slug
  }
}

/* Fetching */
export const fetchBundlesRequest = () => ({
  type: FETCH_BUNDLES_REQUEST
})

export const fetchBundlesSuccess = list => {
  const listWithSlug = list.map(bundle => bundleWithSlug(bundle))
  return {
    type: FETCH_BUNDLES_SUCCESS,
    updatedAt: Date.now(),
    list: listWithSlug
  }
}

export const fetchBundlesError = error => ({
  type: FETCH_BUNDLES_FAILURE,
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

/* Push */
export const pushInBundles = bundle => ({
  type: PUSH_IN_BUNDLES,
  bundle: bundleWithSlug(bundle)
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
  level,
})

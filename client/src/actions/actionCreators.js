import {
  FETCH_BUNDLES_REQUEST,
  FETCH_BUNDLES_SUCCESS,
  FETCH_BUNDLES_FAILURE,
  SET_TOOLS_FILTER,
  SET_BUNDLES_FILTER
} from './actionTypes'

export const fetchBundlesRequest = () => ({
  type: FETCH_BUNDLES_REQUEST
})

export const fetchBundlesSuccess = list => ({
  type: FETCH_BUNDLES_SUCCESS,
  list
})

export const fetchBundlesError = error => ({
  type: FETCH_BUNDLES_FAILURE,
  error
})

export const setToolsFilter = filter => ({
  type: SET_TOOLS_FILTER,
  filter
})

export const setBundlesFilter = filter => ({
  type: SET_BUNDLES_FILTER,
  filter
})

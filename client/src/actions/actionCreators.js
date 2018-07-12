import {
  FETCH_BUNDLES_REQUEST,
  FETCH_BUNDLES_SUCCESS,
  FETCH_BUNDLES_FAILURE
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

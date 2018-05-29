import {
  GET_BUNDLES_REQUEST,
  GET_BUNDLES_SUCCESS,
  GET_BUNDLES_FAILURE,
  CREATE_BUNDLE_REQUEST,
  CREATE_BUNDLE_SUCCESS,
  CREATE_BUNDLE_FAILURE
} from './actionTypes'

export const getBundlesRequest = () => ({
  type: GET_BUNDLES_REQUEST 
})

export const getBundlesSuccess = bundles => ({
  type: GET_BUNDLES_SUCCESS,
  bundles
})

export const getBundlesFailure = error => ({
  type: GET_BUNDLES_FAILURE,
  error
})

export const createBundleRequest = bundleType => ({
  type: CREATE_BUNDLE_REQUEST,
  bundleType
})

export const createBundleSucess = bundle => ({
  type: CREATE_BUNDLE_SUCCESS,
  bundle
})

export const createBundleFailure = error => ({
  type: CREATE_BUNDLE_FAILURE,
  error
})

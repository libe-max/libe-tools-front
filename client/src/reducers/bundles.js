import {
  GET_BUNDLES_REQUEST,
  GET_BUNDLES_SUCCESS,
  GET_BUNDLES_FAILURE,
  CREATE_BUNDLE_REQUEST,
  CREATE_BUNDLE_SUCCESS,
  CREATE_BUNDLE_FAILURE
} from '../actions/actionTypes'

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  list: [],
  creation: {
    creating: false,
    type: null,
    error: null
  }
}

const bundles = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUNDLES_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case GET_BUNDLES_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        list: [...action.bundles]
      }
    case GET_BUNDLES_FAILURE:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.error
      }
    case CREATE_BUNDLE_REQUEST:
      return {
        ...state,
        creation: {
          creating: true,
          type: action.bundleType,
          error: state.creation.error
        }
      }
    case CREATE_BUNDLE_SUCCESS:
      return {
        ...state,
        list: [
          action.bundle,
          ...state.list
        ],
        creation: {
          creating: false,
          type: null,
          error: state.creation.error
        }
      }
    case CREATE_BUNDLE_FAILURE:
      return {
        ...state,
        creation: {
          creating: false,
          type: state.creation.type,
          error: action.error
        }
      }
    default:
      return state
  }
}

export default bundles

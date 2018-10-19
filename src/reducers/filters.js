import {
  SET_TOOLS_FILTER,
  SET_BUNDLES_FILTER
} from '../actions/actionTypes'

const filters = (state = {
  tools: '',
  bundles: ''
}, action) => {
  switch (action.type) {
    case SET_TOOLS_FILTER:
      return Object.assign({}, state, {
        tools: action.filter
      })
    case SET_BUNDLES_FILTER:
      return Object.assign({}, state, {
        bundles: action.filter
      })
    default:
      return state
  }
}

export default filters

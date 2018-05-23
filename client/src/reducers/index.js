import { combineReducers } from 'redux'

const someReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const inputValue = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_INPUT':
      return !state
    default:
      return state
  }
}

const bundles = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({
  someReducer,
  inputValue,
  bundles
})

export default reducer

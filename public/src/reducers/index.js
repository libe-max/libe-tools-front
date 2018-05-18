import { combineReducers } from 'redux'

const someReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({
  someReducer
})

export default reducer

import { PUSH_NOTIFICATION } from '../actions/actionTypes'

const notifications = (state = [], action) => {
  switch (action.type) {
    case PUSH_NOTIFICATION:
      return [
        {
          id: action.id,
          text: action.text,
          level: action.level,
          timestamp: action.timestamp
        },
        ...state
      ]
    default:
      return state
  }
}

export default notifications

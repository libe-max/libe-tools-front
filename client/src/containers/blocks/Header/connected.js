import { push } from 'react-router-redux'

export const state2props = state => ({})

export const dispatch2props = dispatch => ({
  goHome: e => {
    dispatch(push('/'))
  }
})

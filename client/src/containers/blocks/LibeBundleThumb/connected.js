import { push } from 'react-router-redux'

export const state2props = state => ({})

export const dispatch2props = (dispatch, props) => ({
  navigateToBundle: e => {
    e.stopPropagation()
    dispatch(
      push(`/bundle/${props.bundleId}`)
    )
  },
  deleteBundle: e => {
    e.stopPropagation()
    alert('delete!')
  }
})

import { push } from 'react-router-redux'

export const state2props = state => ({})

export const dispatch2props = (dispatch, props) => ({
  navigateToBundle: e => {
    e.stopPropagation()
    dispatch(
      push(`/bundle/${props.type}/${props.bundleId}`)
    )
  },
  deleteBundle: e => {
    e.stopPropagation()
    alert('delete!')
  }
})

import { push } from 'react-router-redux'
import {
  deleteBundleRequest,
  deleteBundleSuccess,
  deleteBundleError,
  pushNotification
} from '../../../actions/actionCreators'

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
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce module ?')) return
    dispatch(deleteBundleRequest(props.bundleId))
    fetch(`/api/delete-bundle/${props.bundleId}`, {
      method: 'DELETE'
    }).then(r => {
      if (r.ok) return r.json()
      throw new Error(`Error ${r.status}: ${r.statusText}`)
    }).then(res => {
      if (!res.err) {
        dispatch(deleteBundleSuccess(res.data))
        dispatch(pushNotification('Le module a bien été supprimé !'))
      } else {
        dispatch(deleteBundleError(props.bundleId, res.err))
        const notif = `Impossible de supprimer ce module, le serveur a répondu : ${res.err}`
        dispatch(pushNotification(notif, 'error'))
      }
    }).catch(err => {
      dispatch(deleteBundleError(props.bundleId, err))
      const notif = `Impossible de supprimer ce module, le serveur a répondu : ${err.message}`
      dispatch(pushNotification(notif, 'error'))
    })
  }
})

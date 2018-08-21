import { push } from 'react-router-redux'
import {
  createBundleRequest,
  createBundleSuccess,
  createBundleError,
  setBundlesFilter,
  pushNotification
} from '../../../actions/actionCreators'

export const state2props = state => ({})

export const dispatch2props = (dispatch, props) => ({
  createNewBundle: e => {
    e.stopPropagation()
    dispatch(createBundleRequest())
    fetch(`/api/create-bundle/${props.type}`)
      .then(r => {
        if (r.ok) return r.json()
        throw new Error(`Error ${r.status}: ${r.statusText}`)
      })
      .then(res => {
        if (!res.err) {
          dispatch(createBundleSuccess())
          dispatch(pushNotification('Le module a bien été créé !'))
          dispatch(push(`/bundle/${res.data.type}/${res.data._id}`))
        } else {
          dispatch(createBundleError())
          const notif = `Impossible de créer ce module de type ${props.type}, le serveur a répondu : ${res.err}`
          dispatch(pushNotification(notif, 'error'))
        }
      })
      .catch(err => {
        dispatch(createBundleError())
        const notif = `Impossible de créer ce module de type ${props.type}, le serveur a répondu : ${err.message}`
        dispatch(pushNotification(notif, 'error'))
      })
  },
  filterBundles: e => {
    e.stopPropagation()
    dispatch(setBundlesFilter(props.type))
  }
})

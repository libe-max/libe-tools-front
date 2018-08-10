import { push } from 'react-router-redux'
import {
  fetchBundleRequest,
  fetchBundleSuccess,
  fetchBundleError,
  editBundleGeneralSetting,
  pushInBundles,
  pushNotification
} from '../../../actions/actionCreators'

export const state2props = (state, props) => ({
  getUnsavedBundle: id => {
    const unsavedBundle = state.bundles.unsavedList.map(bundle => {
      return (bundle._id === id) ? bundle : undefined
    }).filter(elt => elt)[0]
    return unsavedBundle
  }
})

export const dispatch2props = (dispatch, props) => ({
  fetchBundle: id => new Promise((resolve, reject) => {
    dispatch(fetchBundleRequest(id))
    fetch(`/api/get-bundle/${id}`)
      .then(r => {
        if (r.ok) return r.json()
        throw new Error(`Error ${r.status}: ${r.statusText}`)
      })
      .then(res => {
        if (!res.err) {
          dispatch(fetchBundleSuccess(res.data))
          dispatch(pushInBundles(res.data))
          resolve(res.data)
        } else {
          dispatch(fetchBundleError(res.err))
          dispatch(push('/'))
          const notif = `Une erreur est survenue lors du chargement de ce module. Le serveur a répondu : ${res.err}`
          dispatch(pushNotification(notif, 'error'))
          reject(res.err)
        }
      })
      .catch(err => {
        dispatch(fetchBundleError(err.message))
        dispatch(push('/'))
        const notif = `Une erreur est survenue lors du chargement de ce module. Le serveur a répondu : ${err.message}`
        dispatch(pushNotification(notif, 'error'))
        reject(err.message)
      })
  }),
  notify: (text, level) => {
    dispatch(pushNotification(text, level))
  },
  goHome: e => {
    dispatch(push('/'))
  },
  dispatchGeneralSetting: (e, key) => {
    const id = props.match.params.id
    const value = e.target.value
    dispatch(editBundleGeneralSetting(id, key, value))
  },
  dispatchCustomSetting: (e, key) => {
    console.log('wip')
  }
})

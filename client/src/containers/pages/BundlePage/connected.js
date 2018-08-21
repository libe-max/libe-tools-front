import { push } from 'react-router-redux'
import {
  fetchBundleRequest,
  fetchBundleSuccess,
  fetchBundleError,
  saveBundleRequest,
  saveBundleSuccess,
  saveBundleError,
  editBundleGeneralSetting,
  pushNotification
} from '../../../actions/actionCreators'

export const state2props = (state, props) => ({
  getUnsavedBundle: () => {
    const id = props.match.params.id
    const unsavedBundle = state.bundles.unsavedList.map(bundle => {
      return (bundle._id === id) ? bundle : undefined
    }).filter(elt => elt)[0]
    return unsavedBundle
  }
})

export const dispatch2props = (dispatch, props) => ({
  notify: (text, level) => { dispatch(pushNotification(text, level)) },
  goHome: e => { dispatch(push('/')) },
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
  dispatchGeneralSetting: (e, key) => {
    const id = props.match.params.id
    const value = e.target.value
    dispatch(editBundleGeneralSetting(id, key, value))
  },
  dispatchCustomSetting: (e, key) => {
    console.log('wip')
  },
  saveBundle: (bundle) => new Promise((resolve, reject) => {
    const id = bundle._id
    dispatch(saveBundleRequest(id))
    fetch(`/api/save-bundle/${id}`, {
      method: 'POST',
      body: bundle
    }).then(r => {
      if (r.ok) return r.json()
      throw new Error(`Error ${r.status}: ${r.statusText}`)
    }).then(res => {
      if (!res.err) {
        dispatch(saveBundleSuccess(res.data))
        dispatch(pushNotification('Sauvegardé !'))
        resolve(res.data)
      } else {
        dispatch(saveBundleError())
        const notif = `Impossible d'enregistrer ce module, le serveur a répondu : ${res.err}`
        dispatch(pushNotification(notif, 'error'))
        reject(res.err)
      }
    }).catch(err => {
      dispatch(saveBundleError())
      const notif = `Impossible d'enregistrer ce module, le serveur a répondu : ${err.message}`
      dispatch(pushNotification(notif, 'error'))
      reject(err.message)
    })
  })
})

import { push } from 'react-router-redux'
import {
  fetchBundleRequest,
  fetchBundleSuccess,
  fetchBundleError,
  saveBundleRequest,
  saveBundleSuccess,
  saveBundleError,
  editBundle,
  pushNotification
} from '../../../actions/actionCreators'

import { list as toolsList } from '../../../_config/tools'
import { bundleTemplate } from '../../../_config/bundles'

export const state2props = (state, props) => {
  const id = props.match.params.id
  const type = props.match.params.type
  return {
    tool: toolsList.filter(tool => tool.type === type)[0] || {},
    bundle: state.bundles.list.filter(bundle => bundle._id === id)[0] || {...bundleTemplate},
    changes: state.bundles.changes.filter(bundleEdit => bundleEdit._id === id)[0]
  }
}

export const dispatch2props = (dispatch, props) => {
  const id = props.match.params.id
  return {
    goHome: e => dispatch(push('/')),
    dispatchEdition: (e, key) => dispatch(editBundle(id, key, e.target.value)),
    getSavedBundle: () => new Promise((resolve, reject) => {
      dispatch(fetchBundleRequest(id))
      fetch(`/api/get-bundle/${id}`).then(r => {
        if (r.ok) return r.json()
        throw new Error(`Error ${r.status}: ${r.statusText}`)
      }).then(res => {
        if (!res.err) {
          dispatch(fetchBundleSuccess(res.data))
          resolve(res.data)
        } else {
          dispatch(fetchBundleError(res.err))
          const notif = `Une erreur est survenue lors du chargement de ce module. Le serveur a répondu : ${res.err}`
          dispatch(pushNotification(notif, 'error'))
          dispatch(push('/'))
          reject(res.err)
        }
      }).catch(err => {
        dispatch(fetchBundleError(err.message))
        const notif = `Une erreur est survenue lors du chargement de ce module. Le serveur a répondu : ${err.message}`
        dispatch(pushNotification(notif, 'error'))
        dispatch(push('/'))
        reject(err.message)
      })
    }),
    saveChanges: newSettings => new Promise((resolve, reject) => {
      if (!newSettings) return reject(new Error('No changes to save'))
      dispatch(saveBundleRequest(id))
      fetch(`/api/save-bundle/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newSettings),
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      }).then(r => {
        if (r.ok) return r.json()
        throw new Error(`Error ${r.status}: ${r.statusText}`)
      }).then(res => {
        if (!res.err) {
          dispatch(saveBundleSuccess(res.data))
          dispatch(pushNotification('Module sauvegardé !'))
          resolve(res.data)
        } else {
          dispatch(saveBundleError(id))
          const notif = `Une erreur est survenue lors de la sauvegarde de ce module. Le serveur a répondu : ${res.err}`
          dispatch(pushNotification(notif, 'error'))
          reject(res.err)
        }
      }).catch(err => {
        dispatch(saveBundleError(id))
        const notif = `Une erreur est survenue lors de la sauvegarde de ce module. Le serveur a répondu : ${err.message}`
        dispatch(pushNotification(notif, 'error'))
        reject(err.message)
      })
    })
  }
}

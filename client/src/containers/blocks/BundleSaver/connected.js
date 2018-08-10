import {
  saveBundleRequest,
  saveBundleSuccess,
  saveBundleError,
  pushInBundles,
  pushNotification
} from '../../../actions/actionCreators'

import { Bundle } from '../../../_config/bundles'

export const state2props = (state, props) => ({
  savedBundle: state.bundles.list.map(bundle => {
    return (bundle._id === props.id) ? bundle : undefined
  }).filter(elt => elt)[0] || new Bundle(),
  unsaved: state.bundles.unsavedList.some(bundle => {
    return bundle._id === props.id
  })
})

export const dispatch2props = (dispatch, props) => ({
  dispatch
})

export const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  saveBundle: e => new Promise((resolve, reject) => {
    const { dispatch } = dispatchProps
    const { savedBundle } = stateProps
    const id = savedBundle._id
    dispatch(saveBundleRequest(id))
    fetch(`/api/save-bundle/${id}`, {
      method: 'POST',
      body: savedBundle._stringify()
    }).then(r => {
        if (r.ok) return r.json()
        throw new Error(`Error ${r.status}: ${r.statusText}`)
      })
      .then(res => {
        if (!res.err) {
          dispatch(saveBundleSuccess())
          dispatch(pushInBundles(res.data))
          dispatch(pushNotification('Sauvegardé !'))
          resolve(res.data)
        } else {
          dispatch(saveBundleError())
          const notif = `Impossible d'enregistrer ce module, le serveur a répondu : ${res.err}`
          dispatch(pushNotification(notif, 'error'))
          reject(res.err)
        }
      })
      .catch(err => {
        dispatch(saveBundleError())
        const notif = `Impossible d'enregistrer ce module, le serveur a répondu : ${err.message}`
        dispatch(pushNotification(notif, 'error'))
        reject(err.message)
      })
  })
})

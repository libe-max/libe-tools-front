import {
  fetchBundlesRequest,
  fetchBundlesSuccess,
  fetchBundlesError,
  setToolsFilter,
  setBundlesFilter,
  pushNotification
} from '../../../actions/actionCreators'

export const state2props = state => ({
  bundles: state.bundles,
  filters: state.filters,
  bundleCreation: state.bundleCreation
})

export const dispatch2props = dispatch => ({
  getBundles: () => new Promise((resolve, reject) => {
    dispatch(fetchBundlesRequest())
    fetch('/api/get-all-bundles')
      .then(r => {
        if (r.ok) return r.json()
        throw new Error(`Error ${r.status}: ${r.statusText}`)
      })
      .then(res => {
        if (!res.err) {
          dispatch(fetchBundlesSuccess(res.data))
          resolve(res.data)
        } else {
          dispatch(fetchBundlesError(res.err))
          const notif = `Une erreur est survenue lors du chargement des modules. Le serveur a répondu : ${res.err}`
          dispatch(pushNotification(notif, 'error'))
          reject(res.err)
        }
      })
      .catch(err => {
        dispatch(fetchBundlesError(err.message))
        const notif = `Une erreur est survenue lors du chargement des modules. Le serveur a répondu : ${err.message}`
        dispatch(pushNotification(notif, 'error'))
        reject(err.message)
      })
  }),
  setToolsFilter: val => {
    dispatch(setToolsFilter(val))
  },
  setBundlesFilter: val => {
    dispatch(setBundlesFilter(val))
  }
})

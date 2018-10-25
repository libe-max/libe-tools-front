import { EDIT_BUNDLE } from '../../actions/actionTypes'
import { getBundleCurrentSettings } from '../../utils/bundles'

const editBundle = (state, action) => {
  switch (action.type) {
    case EDIT_BUNDLE:
      const { id, key, value } = action
      if (key === 'timestamp') return state
      const stored = state.list.filter(bundle => bundle._id === id)[0]
      const storedSettings = getBundleCurrentSettings(stored)
      const changes = state.changes
        .filter(bundleChanges => bundleChanges._id === id)[0] || { _id: id }
      const newChanges = Object.assign({}, changes, { [key]: value })

      if (newChanges[key] === storedSettings[key]) delete newChanges[key]
      if (newChanges[key] === '' && !storedSettings[key]) delete newChanges[key]
      if (
        Object.keys(newChanges).length <= 1 ||
        !newChanges.hasOwnProperty('_id')
      ) {
        return Object.assign({}, state, {
          changes: [...state.changes.map(bundleChanges => {
            const id1 = bundleChanges._id
            const id2 = id
            return (id1 !== id2) ? bundleChanges : undefined
          })].filter(elt => elt)
        })
      }

      return Object.assign({}, state, {
        changes: [...state.changes.map(bundleChanges => {
          const id1 = bundleChanges._id
          const id2 = id
          return (id1 !== id2) ? bundleChanges : undefined
        }), newChanges].filter(elt => elt)
      })
    default:
      return state
  }
}

export default editBundle

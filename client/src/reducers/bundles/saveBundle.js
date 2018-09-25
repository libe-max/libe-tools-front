import {
  SAVE_BUNDLE_REQUEST,
  SAVE_BUNDLE_SUCCESS,
  SAVE_BUNDLE_FAILURE
} from '../../actions/actionTypes'

const saveBundle = (state, action) => {
  switch (action.type) {
    case SAVE_BUNDLE_REQUEST:
      return Object.assign({}, state, {
        changes: [...state.changes.map(bundleChanges => {
          const id1 = bundleChanges._id
          const id2 = action.id
          return (id1 !== id2) ? bundleChanges : {
            ...bundleChanges,
            _saving: true
          }
        })]
      })
    case SAVE_BUNDLE_SUCCESS:
      return Object.assign({}, state, {
        list: [...state.list.map(bundle => {
          const id1 = bundle._id
          const id2 = action.bundle._id
          return (id1 !== id2) ? bundle : undefined
        }), action.bundle].filter(elt => elt),
        changes: [...state.changes.filter(bundleChanges => {
          const id1 = bundleChanges._id
          const id2 = action.bundle._id
          return (id1 !== id2)
        })]
      })
    case SAVE_BUNDLE_FAILURE:
      return Object.assign({}, state, {
        changes: [...state.changes.map(bundleChanges => {
          const id1 = bundleChanges._id
          const id2 = action.id
          const cleanedBundleChanges = {...bundleChanges}
          delete cleanedBundleChanges._saving
          return (id1 !== id2) ? bundleChanges : cleanedBundleChanges
        })]
      })
    default:
      return state
  }
}

export default saveBundle

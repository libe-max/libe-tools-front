export const bundleTemplate = {
  _id: null,
  type: null,
  name: null,
  created_on: 0,
  settings_history: []
}

export const getBundleCurrentSettings = bundle => {
  const settingsHistory = bundle.settings_history
  if (!settingsHistory) return {}
  if (!Array.isArray(settingsHistory)) return {}
  return settingsHistory
    .sort((a, b) => b.timestamp - a.timestamp)[0] || {}
}

export const getBundleSlug = bundle => {
  const settings = getBundleCurrentSettings(bundle)
  const slug = [
    this._id,
    this.type,
    settings.author,
    settings.name,
    settings.text,
    settings.title
  ].join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/igm, '-')
    .replace(/-{2,}/igm, '-')
    .replace(/-$/, '')
  return slug
}

export const getBundleLastSaveDate = bundle => {
  const settings = getBundleCurrentSettings(bundle)
  const updatedOn = settings.timestamp || 0
  const createdOn = bundle.created_on || 0
  const lastSave = [createdOn, updatedOn].reduce((max, curr) => {
    return Math.max(max, curr)
  })
  return lastSave
}

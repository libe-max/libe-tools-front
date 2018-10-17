const bundleTemplate = {
  _id: null,
  type: null,
  created_on: 0,
  settings_history: []
}

const getBundleCurrentSettings = bundle => {
  const settingsHistory = bundle.settings_history
  if (!settingsHistory) return {}
  if (!Array.isArray(settingsHistory)) return {}
  return settingsHistory
    .sort((a, b) => b.timestamp - a.timestamp)[0] || {}
}

const getBundleSlug = bundle => {
  const settings = getBundleCurrentSettings(bundle)
  const slug = [
    bundle._id,
    bundle.type,
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

const getBundleLastSaveDate = bundle => {
  const settings = getBundleCurrentSettings(bundle)
  const updatedOn = settings.timestamp || 0
  const createdOn = bundle.created_on || 0
  const lastSavedOn = [createdOn, updatedOn].reduce((max, curr) => {
    return Math.max(max, curr)
  })
  return lastSavedOn
}

module.exports = {
  bundleTemplate,
  getBundleCurrentSettings,
  getBundleSlug,
  getBundleLastSaveDate
}

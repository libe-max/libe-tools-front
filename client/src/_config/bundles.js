function Bundle (bundle = {}) {
  this._id = bundle._id
  this.type = bundle.type
  this.name = bundle.name
  this.author = bundle.author
  this.created_on = bundle.created_on
  this.settings_history = [...bundle.settings_history]
  this._getCurrentSettings = function () {
    return this.settings_history.sort((a, b) => {
      return (b.timestamp - a.timestamp)
    })[0] || {}
  }
  this._getSlug = function () {
    const settings = this._getCurrentSettings()
    const slug = [
      this._id,
      this.author,
      this.type,
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
}

export { Bundle }

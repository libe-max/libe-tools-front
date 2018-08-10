function Bundle (bundle = {
  settings_history: []
}) {
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
  this._getLastSaveDate = function () {
    const settings = this._getCurrentSettings()
    const updatedOn = settings.timestamp || 0
    const createdOn = this.created_on || 0
    const lastSave = [createdOn, updatedOn].reduce((max, curr) => {
      return Math.max(max, curr)
    })
    return lastSave
  }
  this._stringify = function () {
    const dataOnly = {
      _id: this._id,
      type: this.type,
      name: this.name,
      author: this.author,
      created_on: this.created_on,
      settings_history: this.settings_history
    }
    return JSON.stringify(dataOnly)
  }
}

export { Bundle }

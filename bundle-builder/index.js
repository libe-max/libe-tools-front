const libeInstagramStory = require('./libe-instagram-story')

module.exports = async (bundleData) => {
  const { type } = bundleData
  switch (type) {
    case 'libe-instagram-story':
      return await libeInstagramStory(bundleData)
    default:
      throw `Unable to build bundles of type ${type}`
  }
}

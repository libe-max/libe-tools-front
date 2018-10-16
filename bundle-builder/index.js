const libeInstagramStory = require('./libe-instagram-story')

module.exports = async function (bundleData) {
  const { type } = bundleData
  switch (type) {
    case 'libe-instagram-story':
      return await libeInstagramStory(bundleData)
    default:
      throw new Error(`Unable to build bundles of type ${type}`)
  }
}

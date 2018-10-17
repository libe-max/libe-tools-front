const cheerio = require('cheerio')
const webshot = require('webshot')
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const moment = require('moment')
const { getBundleCurrentSettings } = require('../../utils/bundles')

module.exports = async bundleData => {
  const processId = `${moment().format('YYMMDD-HHmmss-SSS')}-${uuid()}`
  const outputDir = path.join(__dirname, `../../temp/${processId}`)

  const bundleId = bundleData._id
  const bundleType = bundleData.type
  const bundleSettings = getBundleCurrentSettings(bundleData)
  const bundleSlides = bundleSettings.slides

  const $template = fs.readFileSync(
    path.join(__dirname, `html-template/index.html`),
    { encoding: 'utf-8' }
  )

  const processingSlides = bundleSlides.map(async (slideData, i) => {
    const $ = cheerio.load($template)
    const $slide = $('.libe-insta-slide')
    const $titles = $('[data-property="title"]')
    const $texts = $('[data-property="text"]')
    const $images = $('[data-property="image"]')
    const $backgroundImages = $('*[data-property="backgroundImages"]')

    const { display, title, text, image, backgroundImages } = slideData

    $slide.addClass(`libe-insta-slide_${display}`)
    if (title) $titles.html(title.value)
    if (text) $texts.html(text.value)
    if (image) $images.html(`<img src="${image.src}">`)
    if (backgroundImages) $backgroundImages.html(backgroundImages.map(bgImg => {
      const node = cheerio.load('<div><div></div></div>')
      node('div div').addClass('libe-insta-slide__background-image')
      node('div div').css({
        backgroundImage: `url('${bgImg.src}')`,
        backgroundPosition: `${bgImg.position || 50}% ${bgImg.position || 50}%`
      })
      return node('div').html()
    }).join(''))

    const outputFileName = `${outputDir}/${i}.png`
    const options = {
      siteType: 'html',
      windowSize: { width: 1080, height: 1920 },
      shotSize: { width: 'all', heightg: 'all' },
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
    }

    const webshotPromise = (dom, out, opt) => new Promise((resolve, reject) => {
      webshot(dom, out, opt, e => !e
        ? resolve('screenshiot taken')
        : reject(err)
      )
    })

    const printedSlide = await webshotPromise($slide.html(), outputFileName, options)
    return printedSlide
  })

  const finished = await Promise.all(processingSlides)
  
  return finished
}

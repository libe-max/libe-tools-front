const express = require('express')
const router = express.Router()

/* Get all modules of a specific type */
router.all('/:appName/list', (req, res, next) => {
  const appName = req.params.appName
  res.json({
    err: null,
    data: [{
      type: appName,
      name: 'Some bundle name',
      _id: '1234',
      settings: {
        tut: 'tut',
        lol: 'lol'
      }
    },{
      type: appName,
      name: 'Some bundle name',
      _id: '1235',
      settings: {
        tut: 'tut',
        lol: 'lol'
      }
    }]
  })
})

/* Creation of a new module */
router.all('/:appName/create', (req, res, next) => {
  const appName = req.params.appName
  res.json({
    err: null,
    data: {
      type: appName,
      name: 'Some bundle name',
      _id: '1234',
      settings: {
        tut: 'tut',
        lol: 'lol'
      }
    }
  })
})

/* All other requests */
router.all('/*', (req, res, next) => {
  res.json({
    data: null,
    err: {
      message: `There is nothing to ${req.method} on ${req.url}`
    }
  })
})

module.exports = router

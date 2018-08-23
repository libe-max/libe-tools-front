const express = require('express')
const moment = require('moment')
const router = express.Router()

const allowedTypes = ['yellow-word', 'libe-box']

/* Get all bundles from database */
router.all('/get-all-bundles', (req, res, next) => {
  const collection = req.db.collection('bundles')
  collection.find({}, (e, docs) => !e ?
    res.json({err: null, data: docs}) :
    res.json({err: e, data: null})
  )
})

/* Get one bundle by it's ID */
router.all('/get-bundle/:id', (req, res, next) => {
  const id = req.params.id
  const collection = req.db.collection('bundles')
  const idIsValid = id.match(/^[0-9a-fA-F]{24}$/)
  if (!idIsValid) return res.json({
    err: `Requested bundle ID is not valid (${id})`,
    data: null
  })
  collection.findOne({_id: id}, (e, doc) => !e ?
    res.json({err: null, data: doc}) :
    res.json({err: e, data: null})
  )
})

/* Create a new bundle in database */
router.all('/create-bundle/:type', (req, res, next) => {
  const type = req.params.type
  const now = moment().valueOf()
  const collection = req.db.collection('bundles')
  const typeIsValid = allowedTypes.indexOf(type) + 1
  const newBundle = {
    type,
    settings_history: [],
    created_on: now
  }
  if (!typeIsValid) return res.json({
    data: null,
    err: `Not allowed to create a bundle of type ${type}`
  })
  collection.insert(newBundle, (e, docs) => !e ?
    res.json({err: null, data: docs}) :
    res.json({err: e, data: null})
  )
})

/* Save a bundle edition */
router.put('/save-bundle/:id', (req, res, next) => {
  const id = req.params.id
  const now = moment().valueOf()
  const collection = req.db.collection('bundles')
  const idIsValid = id.match(/^[0-9a-fA-F]{24}$/)
  const request = {
    $push: {
      settings_history: {
        ...req.body,
        timestamp: now
      }
    }
  }
  if (!idIsValid) return res.json({
    err: `Requested bundle ID is not valid (${id})`,
    data: null
  })
  collection.findOneAndUpdate({_id: id}, request, (e, doc) => !e ?
    res.json({err: null, data: doc}) :
    res.json({err: e, data: null})
  )
})

/* All other requests */
router.all('/*', (req, res, next) => res.json({
  data: null,
  err: `There is nothing to ${req.method} on ${req.url}`
}))

module.exports = router

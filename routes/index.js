const express = require('express')
const path = require('path')
const router = express.Router()

/* GET React app. */
const clientRoutes = [
  '/',
  'bundle/:id',
  '/components'
]

router.get(clientRoutes, (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '../client/build/index.html')
  )
})

module.exports = router

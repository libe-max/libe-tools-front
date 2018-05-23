const express = require('express')
const path = require('path')
const router = express.Router()

/* GET React app. */
router.get('/', function (req, res, next) {
  res.sendFile(
    path.join(__dirname, '../public/build/index.html')
  )
})

module.exports = router

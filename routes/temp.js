const express = require('express')
const path = require('path')
const router = express.Router()

/* GET React app. */
router.get('*', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '../temp', req.url)
  )
})

module.exports = router

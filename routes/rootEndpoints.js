'use strict'

// <require the express Router>
const { Router } = require('express')
const router = Router()

// <define routes for getting all songs and a single song>
router.get('/', function (req, res, next) {
  res.json({
    'title': 'The Music History API',
    'songs': 'http://localhost:3000/api/v1/songs',
    'song': 'http://localhost:3000/api/v1/songs/1'
    
  })
})

module.exports = router

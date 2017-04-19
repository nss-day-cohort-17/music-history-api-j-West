'use strict'

// <require the express Router>
const { Router } = require('express')
const router = Router()

// <require the songCtrl to get access to its methods>
const { getSongs, getSong, addSong, deleteSong } = require('../controllers/songCtrl')

// <define routes for getting all songs and a single song>
router.get('/songs', getSongs)
router.post('/songs/add', addSong)
router.get('/songs/:id', getSong)
router.delete('/songs/:SongId', deleteSong)
// <stretch: define routes for posting, deleting, editing a song>

module.exports = router

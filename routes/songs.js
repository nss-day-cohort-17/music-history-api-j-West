'use strict'

// <require the express Router>
const { Router } = require('express')
const router = Router()

// <require the songCtrl to get access to its methods>
const { getSongs, getSong, addSong, deleteSong, editSong } = require('../controllers/songCtrl')

// <define routes for getting all songs and a single song>
router.get('/songs', getSongs)
router.get('/songs/:id', getSong)

// <stretch: define routes for posting, deleting, editing a song>
router.post('/songs/add', addSong)
router.delete('/songs/:SongId', deleteSong)
router.post('/songs/:SongId', editSong)

module.exports = router

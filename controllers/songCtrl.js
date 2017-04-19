'use strict'

// <require a song model>
// const { bookshelf } = require('../db/database')
const Song = require('../models/song')

// < use model methods for getting all songs and one song then send the response back with the data>
module.exports.getSongs = (req, res, next) => {
  Song.getAllSongs()
  .then(songs => {
    res.status(200).json(songs)
  })
  .catch(error => {
    next(error)
  })
}

module.exports.getSong = ({params: {id}}, res, next) => {
  Song.getOneSong(id)
  .then(song => {
    res.status(200).json(song)
  })
  .catch(error => {
    next(error)
  })
}

// <stretch goal: methods for adding, deleting, editing a song>

module.exports.addSong = ({body}, res, next) => {
  Song.forge(body)
  .save()
  .then(() => res.status(201).json({"msg": "Song Saved"}))
  .catch(error => {
    next(error)
  })
}

module.exports.deleteSong = ({params: {SongId}}, res, next) => {
  Song.where({SongId})
  .destroy()
  .then(show => res.status(202).json({"msg": "Song Deleted"}))
  .catch(error => {
    next(error)
  })
}

module.exports.editSong = ({body: {Title, SongLength, ReleaseDate, GenreId, ArtistId, AlbumId}, params: {SongId}}, res, next) => {  
    Song.where({SongId})
    .save({Title, SongLength, ReleaseDate, GenreId, ArtistId, AlbumId}, {method: 'update'})
    .then(data => res.status(202).json(data))
    .catch(error => {
      next(error)
    })
}
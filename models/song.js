'use strict'

const { bookshelf } = require('../db/database')

// <Define a model using bookshelf that describes a song object, as well as
// static methods for getting one or all songs from the db>

// When adding the 'table' property use your old friend DB Browser for SQLite to
// open up the musichistory db and inspect the tables. Add the appropriate table name for
// interfacing with the songs collection
const Song = bookshelf.Model.extend({
  tableName: 'Song'
}, {
  getAllSongs: function () {
    return this.forge()
      .fetchAll()
      .then(songs => songs)
      .catch(error => error)
  },
  getOneSong: function (SongId) {
    return this.forge({SongId})
      .fetch()
      .then(song => song)
      .catch(error => error)
  }
})

module.exports = Song

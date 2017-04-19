'use strict'

const express = require('express')
const bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// <Include the router index file>
const routes = require('./routes/')

// <Setup your routes middleware>
app.use('/api/v1/', routes)

// <catch any undefined routes with a 404 middleware>
app.use((req, res, next) => {
  var err = new Error('404 Nothing here! :(')
  err.status = 404
  next(err)
})

// <Give more detailed error information if in development env>
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// <Handle any errors that occur in the routing with error handlers defined at the bottom of our
// middleware stack>
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

app.listen(3000, () => {
  console.log(`Listening on port 3000`)
})

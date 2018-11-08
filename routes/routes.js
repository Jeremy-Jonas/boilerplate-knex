const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {
        users: users
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/add', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('add', {
        users: users
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/edit', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('edit', {
        users: users
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/filament', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('filament', {
        users: users
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

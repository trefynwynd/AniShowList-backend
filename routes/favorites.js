const express = require('express')
const router = express.Router()
const controllers = ('../controllers/shows')

router.get('/', function(req, res) {
    res.redirect('/favorites')
})

module.exports = router
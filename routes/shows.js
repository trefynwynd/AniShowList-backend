// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/favorites', ctrl.shows.favoriteList);
router.get('/watching', ctrl.shows.watchingList);
router.post('/favorites', ctrl.shows.addFave)
router.post('/watching', ctrl.shows.watchStatus);
router.put('/watching/:id', ctrl.shows.statusChange);
router.delete('/favorites/:id', ctrl.shows.deleteFave);

// exports
module.exports = router;
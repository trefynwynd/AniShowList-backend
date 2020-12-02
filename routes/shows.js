// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/favorites', ctrl.shows.favoriteList);
router.get('/watch-list', ctrl.shows.watchingList);
router.post('/favorites', ctrl.shows.addFave)
router.post('/watch-list', ctrl.shows.watchStatus);
router.put('/watch-list/:id', ctrl.shows.statusChange);
router.delete('/favorites/:id', ctrl.shows.deleteFave);

// exports
module.exports = router;
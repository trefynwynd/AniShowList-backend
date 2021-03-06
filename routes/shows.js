// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/:userId', ctrl.shows.watchingList);
router.post('/', ctrl.shows.watchStatus);
// This is based on the delete method in routes/userFavorites
router.put('/:userId', ctrl.shows.statusChange);

// exports
module.exports = router;
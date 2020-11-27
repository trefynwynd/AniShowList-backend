// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/favorites', ctrl.shows.index);
router.get('/watching', ctrl.shows.watching);
router.post('/', ctrl.shows.create);
router.put('/:id', ctrl.shows.update);
router.delete('/:id', ctrl.shows.destroy);

// exports
module.exports = router;
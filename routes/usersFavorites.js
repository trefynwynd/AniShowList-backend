// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/favorites', ctrl.usersFavorites.favoriteList);
router.post('/favorites', ctrl.usersFavorites.addFave)
router.delete('/favorites/:id', ctrl.usersFavorites.deleteFave);

// exports
module.exports = router;
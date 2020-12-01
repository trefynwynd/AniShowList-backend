// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.usersFavorites.favoriteList);
router.post('/', ctrl.usersFavorites.addFave)
router.delete('/:userId/:apiId', ctrl.usersFavorites.deleteFave);

// exports
module.exports = router;
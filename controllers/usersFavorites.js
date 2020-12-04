const db = require('../models');


// This is to list the favourites (based on art.)
// Read
const favoriteList = (req, res) => {
  // by the userId, find all things in userShow (which is just the apiID)
  db.userShow.findAll({
    // find all by the userId
    where: {
      userId: req.params.userId,
    }
  }).then((data) => {
    // Then take all that is found under the "data" and move it into a json to push to the frontend
    res.json(data)
    })
}

// fave button
// Create
const addFave = (req, res) => {
  db.user.findByPk(req.body.userId).then((user) => {
    db.userShow.findOrCreate({
      where: {
        userId: req.body.userId,
        apiId: req.body.apiId,
        image_url: req.body.image_url
      }
    })
  })
}

// To delete a favourite
// Delete
const deleteFave = (req, res) => {
  db.userShow.findOne({
    where: {
      userId: req.params.userId,
      apiId: req.params.apiId
    }
  }).then((foundShow) => {
    foundShow.destroy().then(() => res.sendStatus(200));
  })
}

module.exports = {
  favoriteList,
  addFave,
  deleteFave,
};
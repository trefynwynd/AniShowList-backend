const db = require('../models');




// This is to list the favourites (based on art.)
// Read
// This looks correct
const favoriteList = (req, res) => {
  db.userShow.findAll({
    where: {
      userId: req.params.userId,
    }
  }).then((data) => {
    res.json(data)
  })
}

// fave button
// Create
// This looks correct
const addFave = (req, res) => {
  console.log(req.body.userId)
  console.log(req.body.apiId)
  db.user.findByPk(req.body.userId).then((user) => {
    db.userShow.findOrCreate({
      where: {
        userId: req.body.userId,
        apiId: req.body.apiId,
        image_url: req.body.image_url
      }
    }).then(() => res.redirect('/favorites'))
  })
}



// To delete a favourite
// Delete
const deleteFave = (req, res) => {
  // let apiId = req.params.apiId
  db.userShow.findOne({
    where: {
      userId: req.params.userId,
      apiId: req.params.apiId
    }
  }).then((foundShow) => {
    foundShow.destroy().then(() => res.sendStatus(200));
  })
  //  res.redirect('/favorites')
}

module.exports = {
  favoriteList,
  addFave,
  deleteFave,
};
const db = require('../models');


// To obtain a list of watched, planning to, or completed shows
// Read
// This is basically the same as favourites, but for a different page
const watchingList = (req, res) => {
  // by the userId, find all things in userShow (which is just the apiID)
  db.userWatch.findAll({
    // find all by the userId
    where: {
      userId: req.params.userId,
    }
  }).then((data) => {
    // Then take all that is found under the "data" and move it into a json to push to the frontend
    res.json(data)
  })
}

// To add the watching status of a show and also the api
// Create
const watchStatus = (req, res) => {
  // create
  db.user.findByPk(req.body.id).then((user) => {
    db.userWatch.findOrCreate({
      where: {
        userId: req.body.userId,
        apiId: req.body.apiId,
        // watching: req.body.watch, // Currently not adding to table
        image_url: req.body.image_url,
      }
    }).then((foundWatch) => {
      res.json({foundWatch, message: `Show added to watch list.`})
    }).catch(err => console.log("Error at creation", err))
  })
}

// To update the watching status.
// Update
// PUT can access body or params
const statusChange = (req, res) => {
  db.user.findByPk(req.user.id).then((user) => {
    db.userWatch.update(req.body.watch, {
      where: {
        watching: req.body.watch
      }
    }).then((foundWatch) => {
      res.json({foundWatch, message: `Show status updated.`})
    }).catch(err => console.log("Error at update", err))
  })
}

module.exports = {
  watchingList,
  watchStatus,
  statusChange,
};
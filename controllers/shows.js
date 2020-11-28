const db = require('../models');



// This is to list the favourites (based on art.)
// Read
// This looks correct
const favoriteList = (req, res) => {
  // by the userId, find all things in userShow (which is just the apiID)
  db.usershow.findByPk(req.user.id).then((user) => {
    user.getFaves().then((faves) => {
    let faveShows = usershow.map (apiId => {
      fetch('https://api.jikan.moe/v3/anime/${apiId.mal_id').then(res => res.json())
    })
      res.render('favorites', {faveShows})
    })
  }).catch(err) {
    // Should if there are no faveShows for the user, then it would error out and display an error on the page
    document.querySelector("#faveContainer").innerHTML = "<p>You do not have any shows that are favourited.</p>"
  }
}

// To obtain a list of watched, planning to, or completed shows
// Read
// This is basically the same as favourites, but for a different page
const watchingList = (req, res) => {

where: {
  apiId
  watching: req.body.watch
}

}

// To add the watching status of a show and also the api
// Create
const watchStatus = (req, res) => {
  // create

  where: {
    apiId
    watching: req.body.watch
  }

}

// To update the watching status
// Update
// This looks correct
const statusChange = (req, res) => {
  db.user.findByPk(req.user.id)
  .then((user) => {
    db.userwatch.update(req.body, {
      where: {
        watching: req.body.watch
      }
    })
  })
}

// fave button
// Create
// This looks correct
const addFave = (req, res) => {
  db.user.findByPk(req.user.id)
  .then((user) => {
    db.usershow.findOrCreate({
      where: {
        apiId: req.body.name
      }
    })
  })

}

// To delete a favourite
// Delete
const deleteFave = (req, res) => {

}

module.exports = {
    favoriteList,
    watchingList,
    watchStatus,
    statusChange,
    addFave,
    deleteFave,
};
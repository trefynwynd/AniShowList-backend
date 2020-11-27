const db = require('../models');



// This is to list the favourites (based on art.)
const index = (req, res) => {
  // by the userId, find all things in userShow (which is just the apiID)
  db.usershow.findByPk(req.user.id).then((user) => {
    user.getFaves().then((faves) => {
    let faveShows = usershow.map (apiId => {
      fetch('https://api.jikan.moe/v3/anime/${apiId.mal_id').then(res => res.json())
    })
      res.render('favorites', {faveShows})
    })
  })
  .catch(err => return (
        document.querySelector("#faveContainer").innerHTML = "<p>You do not have any shows that are favourited."), err)
}

// To obtain a list of watched, planning to, or completed shows
// This is basically the same as favourites, but for a different page
const watching = (req, res) => {

}

// To add the watching status of a show and also the api
const watchStatus = (req, res) => {
  // create

}

// To update the watching status
// This looks correct
const update = (req, res) => {
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
const destroy = (req, res) => {

}

module.exports = {
    index,
    watching,
    create,
    update,
    addFave,
    deleteFave,
};
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
  }) .catch(err => console.log("Error at userShow", err))
    // Should if there are no faveShows for the user, then it would error out and display an error on the page
    // document.querySelector("#faveContainer").innerHTML = "<p>You do not have any shows that are favourited.</p>"
}

// fave button
// Create
// This looks correct
const addFave = (req, res) => {
  db.user.findByPk(req.user.id).then((user) => {
    db.usershow.findOrCreate({
      where: {
        apiId: req.body.name
      }
      }).then(([foundShow, created]) => {
        user.addFave(foundShow).then((relationInfo) => {
        res.redirect('/favorites');
      })
    })
  })

}

// To delete a favourite
// Delete
const deleteFave = (req, res) => {
  let id = req.params.id
  db.usershow.findOne({
    where: {
      apiId: mal_id
    }
    }).then((foundShow) => {
      foundShow.destroy();
    })
   res.redirect('/favorites')
}

module.exports = {
  favoriteList,
  addFave,
  deleteFave,
};
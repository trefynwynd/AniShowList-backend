const db = require('../models');




// This is to list the favourites (based on art.)
// Read
// This looks correct
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
    // user.getFaves().then((faves) => {
    //   let faveShows = userShow.map (apiId => 
      //   {
      //   fetch('https://api.jikan.moe/v3/anime/${apiId.mal_id').then(res => res.json())
      // }
      // )
    })
  }
  //  .catch(err => console.log("Error at userShow", err))
    // Should if there are no faveShows for the user, then it would error out and display an error on the page
    // document.querySelector("#faveContainer").innerHTML = "<p>You do not have any shows that are favourited.</p>"

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
    })
    // .then(([foundShow, created]) => {
    //   user.addFave(foundShow).then((relationInfo) => {
    //   // res.redirect('/favorites');
    // })
    // })
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
    foundShow.destroy();
  })
  //  res.redirect('/favorites')
}

module.exports = {
  favoriteList,
  addFave,
  deleteFave,
};
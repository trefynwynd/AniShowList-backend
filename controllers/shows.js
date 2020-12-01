const db = require('../models');


// To obtain a list of watched, planning to, or completed shows
// Read
// This is basically the same as favourites, but for a different page
// This looks correct
const watchingList = (req, res) => {
  db.userWatch.findByPk(req.user.id).then((user) => {
    user.getWatch().then((watch) => {
      let watchShows = userWatch.map(apiId => {
        fetch('https://api.jikan.moe/v3/anime/${apiId.mal_id').then(res => res.json())
      })
      // I'm not sure how to pass this variable over
      let watchingStatus = userWatch.watching
        // res.render('watchlist', { watchShows, watchingStatus })
      })
    })
  }

// To add the watching status of a show and also the api
// Create
const watchStatus = (req, res) => {
  // create
  db.user.findByPk(req.user.id).then((user) => {
    db.userWatch.findOrCreate({
      where: {
        apiId: mal_id,
        watching: req.body.watch
      }
    })
      // .then(([watchShow, created]) => {
      //   user.addStatus(watchShow).then((relationInfo) => {
      //   res.redirect('/watchlist');
      // })
  })
}

// To update the watching status.
// Update
// This looks correct
const statusChange = (req, res) => {
  db.user.findByPk(req.user.id).then((user) => {
    db.userWatch.update(req.body.watch, {
      where: {
        watching: req.body.watch
      }
    })
      // .then((updateStatus) => {
      //     res.redirect('/watchlist')
      // })
  })
}



module.exports = {
    watchingList,
    watchStatus,
    statusChange,
};
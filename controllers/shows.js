const db = require('../models');


// To obtain a list of watched, planning to, or completed shows
// Read
// This is basically the same as favourites, but for a different page
// This looks correct
const watchingList = (req, res) => {
  db.userwatch.findByPk(req.user.id).then((user) => {
    user.getWatch().then((watch) => {
      let watchShows = userwatch.map(apiId => {
        fetch(`https://api.jikan.moe/v3/anime/${apiId.mal_id}`).then(res => res.json())
      })
      let watchingStatus = userwatch.watching
      res.render('watch-list', { watchShows, watchingStatus })
    })
  })
}

// To add the watching status of a show and also the api
// Create
const watchStatus = (req, res) => {
  // create
  db.user.findByPk(req.user.id).then((user) => {
    db.userwatch.findOrCreate({
      where: {
        apiId: mal_id,
        watching: req.body.watch
      }
    }).then(([watchShow, created]) => {
      user.addStatus(watchShow).then((relationInfo) => {
        res.redirect('/watch-list');
      })
    })
  })
}

// To update the watching status
// Update
// This looks correct
const statusChange = (req, res) => {
  db.user.findByPk(req.user.id).then((user) => {
    db.userwatch.update(req.body, {
      where: {
        watching: req.body.watch
      }
    }).then((updateStatus) => {
      res.redirect('/watch-list')
    })
  })
}

module.exports = {
    watchingList,
    watchStatus,
    statusChange,
};
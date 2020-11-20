const db = require('../models');

const index = (req, res) => {
    db.game.findAll().then((foundGames) => {
        if (!foundGames) return res.json({
            message: 'No Games found in database.'
        })

        // respond with a JSON-ified object of games
        res.json({ games: foundGames })
    })
        .catch(err => console.log("Error at games#index", err))
}

const show = (req, res) => {
    db.game.findByPk(req.params.id).then((foundGame) => {
        if (!foundGame) return res.json({
            message: 'Game with provided ID not found.'
        })

        res.json({ game: foundGame })
    })
        .catch(err => console.log("Error at games#index", err))
}

const create = (req, res) => {
    db.game.create(req.body).then((savedGame) => {

        // validations?

        res.json({ game:savedGame })
    })
        .catch(err => console.log("Error at games#index", err))
}

const update = (req, res) => {
    // make the update route
    db.game.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then((updatedGame) => {
        // Validations and error handling here
        res.json({ game: updatedGame })
    })
        .catch(err => console.log("Error at games#index", err))
}

//not sure
const destroy = (req, res) => {
    db.game.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.json({ message: `Game witn id ${req.params.id} has been deleted.` })
    })
        .catch(err => console.log("Error at games#index", err))
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};

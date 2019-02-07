const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');


// GET
routes.get("/tweets", (req, res) => TweetController.index(req, res));

// POST
routes.post("/tweets", (req, res) => TweetController.store(req, res));
routes.post("/likes/:id", (req, res) => LikeController.store(req, res));


module.exports = routes;
var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
const usersRouter = express.Router();
usersRouter.route('/')
.get((req, res, next) => {
    User.find()
    .then(users => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.json(users)
    })
})
.post((req, res, next) => {
  User.create(req.body)
  .then(campsite => {
      console.log('Campsite Created ', campsite);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(campsite);
  })
  .catch(err => next(err));
})

usersRouter.route('/:userId')
.get((req, res, next) => {
    
    User.findById(req.params.userId)
    .then(user => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(user);
    })
    .catch(err => next(err))
});

usersRouter.route('/:userId/requests')
.post((req, res, next) => {
    console.log(req.body)
    User.findById(req.params.userId)
    .then(user => {
      if (user) {
        user.requests.push(req.body)
        user.save()
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user.requests);
      }
      else {
        err = new Error(`User not found`);
        err.status = 404;
        return next(err);
    }
    })
    .catch(err => next(err))
})

module.exports = usersRouter;

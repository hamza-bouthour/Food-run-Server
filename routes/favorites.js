const express = require('express');
const Dish = require('../models/dish');
const User = require('../models/user');


const favoriteRouter = express.Router();
favoriteRouter.route('/')
.get((req, res, next) => {
    Dish.find()
    .then(dishes => {
        console.log(dishes)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.json(dishes)
    })
})
.post((req, res, next) => {
  Dish.create(req.body)
  .then(dish => {
      console.log('Campsite Created ', dish);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dish);
  })
  .catch(err => next(err));
})
.delete((req, res, next) => {
    console.log(JSON.stringify(zeb))
  Dish.deleteMany()
  .then(response => {
    //   console.log('Campsite Created ', dish);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(zeb);
  })
  .catch(err => next(err));
})





module.exports = favoriteRouter;
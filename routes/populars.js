var express = require('express');
const Popular = require('../models/popular');
const Dish = require('../models/dish');
const zeb = {
  name: 'Garlic Chicken',
            cost: 8,
            time: 110,
            video: 'https://www.youtube.com/watch?v=GDjwU5e5_Lc',
            img: 'https://i.postimg.cc/QMxt6y7d/garlic-chicekn.jpg',
            description: "Sprinkle chicken breasts with garlic powder, onion powder and seasoning salt - then sautee and enjoy. Couldn't be easier! Great recipe for quick and easy meal, even for the pickiest eater!",
            
            directions: [
                "1. In a large resealable plastic bag, combine cheese and dressing mix; add chicken. Seal bag and shake to coat.",
                "2. Place chicken in a greased 8-in. square baking dish. Bake, uncovered, at 400° for 20-25 minutes or until a thermometer reads 170°."
            ]
        }

/* GET users listing. */
const popularsRouter = express.Router();
popularsRouter.route('/')
.get((req, res, next) => {
    Popular.find()
    .then(populars => {
        console.log(populars)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.json(populars)
    })
})
.post((req, res, next) => {
  Popular.create(req.body)
  .then(dish => {
      console.log('Campsite Created ', dish);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(dish);
  })
  .catch(err => next(err));
})
.delete((req, res, next) => {
  // Popular.deleteMany()
  // .then(response => {
    //   console.log('Campsite Created ', dish);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(zeb);
  // })
  // .catch(err => next(err));
})





module.exports = popularsRouter;

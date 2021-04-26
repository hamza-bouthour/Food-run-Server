const express = require('express');
const User = require('../models/user');

const signUpRouter = express.Router();

signUpRouter.route('/')
.get((req, res) => {
    res.statusCode = 200
    res.end('GET operation not supported')
})
.post((req, res, next) => {
    // User.create(req.body)
    // .then(user => {
       
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.end('user created');
        // res.json(user)
    // })
    // .catch(err => next(err))
})
.put((req, res) => {
    res.statusCode = 200
    res.end('GET operation not supported')
})
.delete((req, res) => {
    res.statusCode = 200
    res.end('GET operation not supported')
})

module.exports = signUpRouter;
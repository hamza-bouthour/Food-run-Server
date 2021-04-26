const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    time: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    ingredients: {
        type: Array,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    day: {
        type: String,
        required: false
    }
})

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
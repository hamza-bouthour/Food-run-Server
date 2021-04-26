const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const popularSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: false
    },
    time: {
        type: Number,
        required: false
    },
    video: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    directions: {
        type: Array,
        required: false
    }
})

const Popular = mongoose.model('Popular', popularSchema);

module.exports = Popular;
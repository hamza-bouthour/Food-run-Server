const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const requestsSchema = new Schema({
    requesterId: {
        type: String,
        required: true
    },
    friends: {
        type: Boolean,
    },
    location: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    requests: [requestsSchema],
    subjects: [subjectsSchema]
})

const User = mongoose.model('User', userSchema);

module.exports = User;
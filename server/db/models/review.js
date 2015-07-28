'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    user: {
        type: mongoose.model('User'),
        required: true
    },
    product: {
        type: mongoose.model('Product'),
        required: true
    },
    text: {
        type: String,
        required: true,
        minlength: 10
    },
    rating: {
        type: Number,
        required: true
    },
    upVotes: {
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number,
        default: 0
    }
});

mongoose.model('Review', schema);
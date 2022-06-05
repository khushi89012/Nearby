const mongoose = require('mongoose');

const ResturantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    location : {
        type: { type: String },
        coordinates: []
    },
  
    cuisines: {
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false

    }
});

module.exports = mongoose.model('Resturant', ResturantSchema);
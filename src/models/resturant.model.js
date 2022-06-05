
const mongoose = require('mongoose');

const Neighborhood = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    radius:{
        type: Number,
        required: true
    },
  
        location: {
            type: Boolean,
            coordinates: [Number, Number]
      }
       
    

    });

    module.exports = mongoose.model('Neighbourhood', Neighborhood);

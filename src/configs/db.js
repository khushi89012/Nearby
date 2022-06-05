const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/resturant', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to database');
}
).catch(err => {
    console.log(err);
}
);
module.exports = connect;

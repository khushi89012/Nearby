const express = require('express');
const connect = require('./src/configs/db');
const Neighbourhood = require("./src/controllers/user.controller");
const Resturant = require('./src/controllers/user.controller');
const app = express();

app.use(express.json())

app.use('/', Neighbourhood);
app.use('/', Resturant);

    



app.listen(3000, async () => {
    await connect
    console.log('Server is running on port 3000');
})
const express = require('express');
const path = require('path');
require('dotenv').config();
const WebRouter = require('./src/routers/web');
const apirouter = require('./src/routers/api');
const fileUpload = require('express-fileupload');
const connection = require('./src/config/database');
const {
    default: mongoose
} = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//confix template engine
//config req.body
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//config file upload
app.use(fileUpload());
//Khai bao router
app.use('/', WebRouter);
app.use('/v1/api/', apirouter);

//test connection
(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log("error connect to db", error);
    }
})()
// create the connection to database


// simple query
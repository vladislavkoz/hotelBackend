const express = require('express');
const app = express();
const router = require('./routes');
const mongoose = require('mongoose');
var cors = require('cors')

const DB_URL = 'mongodb://localhost/Hotel';
mongoose.connect(DB_URL, function(err){
    if (err){
        console.error('Mongo connection FAIL!' + err);
    }else {
       console.log('Mongo connection OK!')
    }
});

app.use(cors())

app.use(express.json());
app.use(router);

module.exports = app;
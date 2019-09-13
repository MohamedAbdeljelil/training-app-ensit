//import dependencies modules
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
//init express (create the server)
var app = express();
// adding middlewares cors and body-parser
app.use(cors());
app.use(bodyParser.json());
?
//connect to mongodb
mongoose.connect('mongodb://mongo:27017/training-app', {useMongoClient: true});
//on connection ok
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb server at 27017 port');
});
//on connection error
mongoose.connection.on('error',(err)=>{
    if (err)
    {
        console.log('Error connection to mongodb server at 27017: '+err);
    }
});
//port number
const port =3000;
app.listen(port,function(){
    console.log('Server started at port:'+port);
});
?
?
//Testtin server
app.get('/', (req, res)=>{res.send('Hi everyone!');});
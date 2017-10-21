const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');


//set up express app
var app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/openxc');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

//init
app.use('/api',routes);

//error handling middleware
app.use(function(err,req,res,next){
    // console.log(err);
    res
        .status(422)
        .send({error : err.message});
})


//listen for request
app.listen(process.env.prot || 3000,function(){
    console.log("now listing for requests");
})
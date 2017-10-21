const express = require('express');
const router = express.Router();
const openxc = require('../models/register');
const rpm = require('../models/rpm');



router.get('/register', function(req,res,next){
    var data = {
        "Data":""
    };
    openxc.find({}).then(function(rows){
        data["Data"] = rows;
        res.send(data);
    })
});


router.post('/register', function(req,res,next){
    openxc.create(req.body).then(function(rows){
    res
        .status(200)
        .send(rows);
    console.log("success");
  }).catch(next);
   
    
});



//update a register in database
router.put('/register/:id', function(req,res,next){
    openxc.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        openxc.findOne({_id:req.params.id}).then(function(rows){

            res.send(rows);
        });
    });
});

//delete a register from database
router.delete('/register/:id', function(req,res,next){
    openxc.findByIdAndRemove({_id: req.params.id}).then(function(rows){
        res.send(rows);
    });
    // res.send({type : 'DELETE'});
});

//For input the RPM data 
router.post('/rpm', function(req,res,next){
    rpm.create(req.body).then(function(rows){
    res
        .status(200)
        .send(rows);
    console.log("success");
  }).catch(next);
   
    
});

module.exports = router;

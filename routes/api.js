const express = require('express');
const router = express.Router();
const openxc = require('../models/register');
const rpm = require('../models/rpm');
const dtc = require('../models/dtc');        

//*********For Registretion *********/
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


//*********For RPM *********/
//For input the RPM data 
router.post('/rpm', function(req,res,next){
    rpm.create(req.body).then(function(rows){
    res
        .status(200)
        .send(rows);
    console.log("success");
  }).catch(next);
 
});


//*********For Diagnostic Trouble Codes*********/
router.post('/dtc', function(req,res,next){
    dtc.create(req.body).then(function(rows){
    res
        .status(200)
        .send(rows);
    console.log("success");
  }).catch(next);
    
});

router.get('/dtc', function(req,res,next){
    var data = {
        "Data":""
    };
    dtc.find({}).then(function(rows){
        data["Data"] = rows;
        res
            .status(200)
            .send(data);
        console.log("success");
    })
});

router.get('/dtc/:id', function(req,res,next){
    var data = {
        "Data":""
    };
    
    dtc.findById({_id: req.params.id}).then(function(rows){
        res.send(rows);
        console.log(rows);
    });
    console.log("success");
});

module.exports = router;

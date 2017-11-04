const express = require('express');
const router = express.Router();
const User = require('../models/user');
const rpm = require('../models/rpm');
const dtc = require('../models/dtc');
const readiness = require('../models/readiness');
const freezeFrame = require('../models/freezeFrame');
const engineCodes = require('../models/engineCodes');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;        

//*********For Registretion *********/
// router.get('/register', function(req,res,next){
//     var data = {
//         "Data":""
//     };
//     user.find({}).then(function(rows){
//         data["Data"] = rows;
//         res.send(rows);
//         console.log(rows)
//     })
// });

// router.post('/register', function(req,res,next){
//     user.create(req.body).then(function(rows){
//     res
//         .status(200)
//         .send(rows);
//     console.log("success");
//   }).catch(next);
    
// });

// //update a register in database
// router.put('/register/:id', function(req,res,next){
//     user.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
//         user.findOne({_id:req.params.id}).then(function(rows){

//             res.send(rows);
//         });
//     });
// });

// //delete a register from database
// router.delete('/register/:id', function(req,res,next){
//     user.findByIdAndRemove({_id: req.params.id}).then(function(rows){
//         res.send(rows);
//     });
//     // res.send({type : 'DELETE'});
// });


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

router.get('/rpm', function(req,res,next){
    var data = {
        "Data":""
    };
    rpm.find({}).then(function(rows){
        data["Data"] = rows;
        res.send(data);
    })
});

router.get('/rpm/:id', function(req,res,next){
    var data = {
        "Data":""
    };
    
    rpm.findById({_id: req.params.id}).then(function(rows){
        res.send(rows);
        console.log(rows);
    });
    console.log("success");
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


//*********For Readiness Codes*********/
router.post('/read', function(req,res,next){
    readiness.create(req.body).then(function(rows){
    res
        .status(200)
        .send(rows);
    console.log("success");
  }).catch(next);
    
});

router.get('/read', function(req,res,next){
    var data = {
        "Data":""
    };
    readiness.find({}).then(function(rows){
        data["Data"] = rows;
        res
            .status(200)
            .send(data);
        console.log("success");
    })
});


//*********For engine codes*********/
router.post('/e_codes', function(req,res,next){
    engineCodes.create(req.body).then(function(rows){
    res
        .status(200)
        .send(rows);
    console.log("success");
  }).catch(next);
    
});

router.get('/e_codes', function(req,res,next){
    var data = {
        "Data":""
    };
    engineCodes.find({}).then(function(rows){
        data["Data"] = rows;
        res
            .status(200)
            .send(data);
        console.log("success");
    })
});


//*********For Freeze Frame*********/
router.post('/freeze_frame', function(req,res,next){
    freezeFrame.create(req.body).then(function(rows){
    res
        .status(200)
        .send(rows);
    console.log("success");
  }).catch(next);
    
});

router.get('/freeze_frame', function(req,res,next){
    var data = {
        "Data":""
    };
    freezeFrame.find({}).then(function(rows){
        data["Data"] = rows;
        res
            .status(200)
            .send(data);
        console.log("success");
    })
});












module.exports = router;

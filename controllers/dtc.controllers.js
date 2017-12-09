const dtc = require('../models/dtc');
const user = require('../models/user');
const fs = require('fs');
const xml2js = require('xml2js');


var parser = new xml2js.Parser();
var result1;


//**********READ DATA FROM XML FILE*******************/
fs.readFile('note.xml',function(err,data){
    parser.parseString(data,function(err,result){
        if(err) throw err
        else{
         result1 = result.note; 
         console.log(result1.code);
        }
       
    })
})

//**********ADD DATA TO DTC COLLECTION*******************/
module.exports.dtcAddAll = function(req,res,next){

    user.findById(req.params.id, function(err, user) {
        if (err) {
            res.send(err);
        }
    })

    console.log(result1);
    let newDtc = new dtc(); 
        
    newDtc.code = result1.code;
    newDtc.system = result1.system;
    newDtc.manufacturer = result1.manufacturer;
    newDtc.user = req.params.id;

    newDtc.save(function(err){
        if(err){
            res.send(err);
        }

        res.json({message: 'DTC was successful'})
    });
   

}


//**********GET DATA FROM DTC COLLECTIONS*******************/
module.exports.dtcGetAll = function (req, res, next) {
    var data = {
        "Data": ""
    };
    dtc.find({}).then(function (rows) {
        data["Data"] = rows;
        res
            .status(200)
            .send(data);
        console.log("success");
    })

}


//**********GET ONE DATA FROM DTC COLLECTION THROUGH DTC COLLECTION ID******************/
module.exports.dtcGetOne = function (req, res, next) {
    var data = {
        "Data": ""
    };

    dtc.findById({ _id: req.params.id }).then(function (rows) {
        res.send(rows);
        console.log(rows);
    });
    console.log("success");

}
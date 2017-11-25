const dtc = require('../models/dtc');

module.exports.dtcAddAll = function(req, res, next){
    dtc.create(req.body).then(function (rows) {
        res
            .status(200)
            .send(rows);
        console.log("success");
    }).catch(next);

}

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
const readinessCodes = require('../models/readiness');

module.exports.readinessCodesAddAll = function (req, res, next) {
    readinessCodes.create(req.body).then(function (rows) {
        res
            .status(200)
            .send(rows);
        console.log("success");
    }).catch(next);

}

module.exports.readinessCodesGetAll = function (req, res, next) {
    var data = {
        "Data": ""
    };
    readinessCodes.find({}).then(function (rows) {
        data["Data"] = rows;
        res
            .status(200)
            .send(data);
        console.log("success");
    })

}


module.exports.readinessCodesGetOne = function (req, res, next) {
    var data = {
        "Data": ""
    };

    readinessCodes.findById({ _id: req.params.id }).then(function (rows) {
        res.send(rows);
        console.log(rows);
    });
    console.log("success");

}
const eCode = require('../models/engineCodes');

module.exports.eCodeAddAll = function (req, res, next) {
    eCode.create(req.body).then(function (rows) {
        res
            .status(200)
            .send(rows);
        console.log("success");
    }).catch(next);

}

module.exports.eCodeGetAll = function (req, res, next) {
    var data = {
        "Data": ""
    };
    eCode.find({}).then(function (rows) {
        data["Data"] = rows;
        res
            .status(200)
            .send(data);
        console.log("success");
    })

}


module.exports.eCodeGetOne = function (req, res, next) {
    var data = {
        "Data": ""
    };

    eCode.findById({ _id: req.params.id }).then(function (rows) {
        res.send(rows);
        console.log(rows);
    });
    console.log("success");

}
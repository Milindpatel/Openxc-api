const rpm = require('../models/rpm');

module.exports.rpmAddAll = function (req, res, next) {
    rpm.create(req.body).then(function (rows) {
        res
            .status(200)
            .send(rows);
        console.log("success");
    }).catch(next);

}

module.exports.rpmGetAll = function (req, res, next) {
    var data = {
        "Data": ""
    };
    rpm.find({}).then(function (rows) {
        data["Data"] = rows;
        res
            .status(200)
            .send(data);
        console.log("success");
    })

}


module.exports.rpmsGetOne = function (req, res, next) {
    var data = {
        "Data": ""
    };

    rpm.findById({ _id: req.params.id }).then(function (rows) {
        res.send(rows);
        console.log(rows);
    });
    console.log("success");

}
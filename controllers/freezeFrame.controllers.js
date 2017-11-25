const freezeFrame = require('../models/freezeFrame');

module.exports.freezeFrameAddAll = function (req, res, next) {
    freezeFrame.create(req.body).then(function (rows) {
        res
            .status(200)
            .send(rows);
        console.log("success");
    }).catch(next);

}

module.exports.freezeFrameGetAll = function (req, res, next) {
    var data = {
        "Data": ""
    };
    freezeFrame.find({}).then(function (rows) {
        data["Data"] = rows;
        res
            .status(200)
            .send(data);
        console.log("success");
    })

}


module.exports.freezeFrameGetOne = function (req, res, next) {
    var data = {
        "Data": ""
    };

    freezeFrame.findById({ _id: req.params.id }).then(function (rows) {
        res.send(rows);
        console.log(rows);
    });
    console.log("success");

}
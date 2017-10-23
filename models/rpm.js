const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create openxc Schema & model
const rpmSchema = new Schema({
    rpm: {
        type: String,
        required : [true,'rpm field is required']
    }
});


// const openxc = mongoose.model('openxc',openxcSchema);

module.exports = mongoose.model('rpm',rpmSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create openxc Schema & model
const ecodeSchema = new Schema({
    ecode: {
        type: String,
        required : [true,'engine code field is required']
    }
});


// const openxc = mongoose.model('openxc',openxcSchema);

module.exports = mongoose.model('ecode',ecodeSchema);
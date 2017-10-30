const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create openxc Schema & model
const freezeSchema = new Schema({
    pid: {
        type: String,
        required : [true,'pid field is required']
    },
    description: {
        type : String,
        required : [true,'description field is required']
    },
    value:{
        type: String,
        required : [true,'value field is required']
    }
});


// const openxc = mongoose.model('openxc',openxcSchema);

module.exports = mongoose.model('freezeframe',freezeSchema);
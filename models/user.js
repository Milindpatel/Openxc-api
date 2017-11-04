const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create openxc Schema & model
const openxcSchema = new Schema({
    username: {
        type: String,
        required : [true,'Name field is required']
    },
    email : {
        type : String,
        required : [true,'email field is required']
    },
    password:{
        type: String,
        required : [true,'password field is required']
    },
    phone: {
        type : String,
        required : [true,'phone field is required']
    },
    vin:{
        type:String,
        required : [true,'vin field is required']
    },
    gcm:{
        type: String,
        required : [true,'gcm field is required']
    }
    

});


// const openxc = mongoose.model('openxc',openxcSchema);

module.exports = mongoose.model('openxc',openxcSchema);
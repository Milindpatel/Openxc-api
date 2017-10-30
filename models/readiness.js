const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create openxc Schema & model
const readinessSchema = new Schema({
    monitor_des: {
        type: String,
        required : [true,'Monitor description field is required']
    },
    status_dtc_clr: {
        type : String,
        required : [true,'status since DTCs cleared field is required']
    },
    status_driving_cycle:{
        type: String,
        required : [true,'status for driving cycle field is required']
    }
});


// const openxc = mongoose.model('openxc',openxcSchema);

module.exports = mongoose.model('readiness',readinessSchema);
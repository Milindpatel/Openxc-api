var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    vin: {type: String, required: true},
    make: {type: String, required: true},
    model: {type: String, required: true},
    license_plate: {type: String},
    OBD_standard: {type: String},
    lastConnected: {type: Date},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    eCode: {type: Schema.Types.ObjectId, ref: 'engineCode'}
    
});

module.exports = mongoose.model('vehicle', schema);
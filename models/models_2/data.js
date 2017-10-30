var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    odometer: {type: Number},
    fine_odometer_since_restart: {type: Number},
    locatation: {type: Point, coordinates: [{longitude: Number}, {latitude: Number}]},
    torque_at_transmission: {type: Number},
    engine_speed: {type: Number},
    vehicle_speed: {type: Number},
    door_status: { status: [{value: String, event: Boolean}]},
    accelerator_pedal_position: {type: Number},
    brake_pedal_status: {type: Boolean},
    parking_brake_status: {type: Boolean},
    headlamp_status: {type: Boolean},
    high_beam_status: {type: Boolean},
    windshield_wiper_status: {type: Boolean},
    ignition_status: {type: String},
    steering_wheel_angle: {type: Number},
    fuel_level: {type: Number},
    fuel_consumed_since_restart: {tipe: Number},
    transmission_gear_position: {type: String},
    time_of_record: {type: Date},
    vehicle: {type: Schema.Types.ObjectId, ref: 'Vehicle'}
});

module.exports = mongoose.model('data', schema);
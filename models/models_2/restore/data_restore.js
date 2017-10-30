db = db.getSiblingDB("OpenCar");
db.data.drop();

var m = db.users.findOne({firstName: "Marcel"}, {_id: 1});
var mv= m['_id'];

var vh = db.vehicles.findOne({user: mv});
vh['_id'].toString
var vhToString = vh['_id'].str;


db.data.insertMany([
    {
        "odometer": 0.0,
        "fine_odometer_since_restart": 0.0,
       "location":{ type: "Point", coordinates: [-83.237617, 42.291595]},
        "torque_at_transmission": null,
        "engine_speed": 714.0,
        "vehicle_speed": 0.0,
       "door_status":[{value: "driver",event: false },{ value: "passenger", event: false },{ value: "rear_left", event: false },{ value: "rear_right", event: false }],
        "accelerator_pedal_position": null,
        "brake_pedal_status": false,
        "parking_brake_status": false,
        "headlamp_status": false,
        "high_beam_status": false,
        "windshield_wiper_status": false,
        "ignition_status": null,
        "steering_wheel_angle": 11.1633,
        "fuel_level": null,
        "fuel_consumed_since_restart": 0.073475,
        "transmission_gear_position": null,
        "powertrain_torque": null,
        "time_of_record": ISODate("2017-10-28T12:33:39.00Z"),
        "vehicle": vhToString
    },{
        "odometer": 0.0,
        "fine_odometer_since_restart": 0.0,
       "location":{ type: "Point", coordinates: [-83.237602, 42.291447]},
        "torque_at_transmission": null,
        "engine_speed": 758.0,
        "vehicle_speed": 0.0,
       "door_status":[{value: "driver",event: false },{ value: "passenger", event: false },{ value: "rear_left", event: false },{ value: "rear_right", event: false }],
        "accelerator_pedal_position": 0.0,
        "brake_pedal_status": false,
        "parking_brake_status": false,
        "headlamp_status": false,
        "high_beam_status": false,
        "windshield_wiper_status": false,
        "ignition_status": "run",
        "steering_wheel_angle": 11.075399,
        "fuel_level": null,
        "fuel_consumed_since_restart": 0.07945,
        "transmission_gear_position": null,
        "powertrain_torque": -1.0,
        "time_of_record": ISODate("2017-10-28T12:34:40.00Z"),
        "vehicle": vhToString
    },{
        "odometer": 0.0,
        "fine_odometer_since_restart": 0.366266,
       "location":{ type: "Point", coordinates: [-83.237602, 42.291447]},
        "torque_at_transmission": null,
        "engine_speed": 754.0,
        "vehicle_speed": 0.0,
       "door_status":[{value: "driver",event: false },{ value: "passenger", event: false },{ value: "rear_left", event: false },{ value: "rear_right", event: false }],
        "accelerator_pedal_position": 0.0,
        "brake_pedal_status": true,
        "parking_brake_status": false,
        "headlamp_status": false,
        "high_beam_status": false,
        "windshield_wiper_status": false,
        "ignition_status": "run",
        "steering_wheel_angle": 11.075399,
        "fuel_level": null,
        "fuel_consumed_since_restart": 0.079775,
        "transmission_gear_position": "first",
        "powertrain_torque": -1.0,
        "time_of_record": ISODate("2017-10-28T12:35:40.00Z"),
        "vehicle": vhToString
    },{
        "odometer": 0.0,
        "fine_odometer_since_restart": 0.366266,
       "location":{ type: "Point", coordinates: [-83.237602, 42.291447]},
        "torque_at_transmission": null,
        "engine_speed": 854.0,
        "vehicle_speed": 0.0,
       "door_status":[{value: "driver",event: false },{ value: "passenger", event: false },{ value: "rear_left", event: false },{ value: "rear_right", event: false }],
        "accelerator_pedal_position": 0.0,
        "brake_pedal_status": false,
        "parking_brake_status": false,
        "headlamp_status": false,
        "high_beam_status": false,
        "windshield_wiper_status": false,
        "ignition_status": "run",
        "steering_wheel_angle": 11.075399,
        "fuel_level": null,
        "fuel_consumed_since_restart": 0.0805,
        "transmission_gear_position": "first",
        "powertrain_torque": 11.0,
        "time_of_record": ISODate("2017-10-28T12:36:40.00Z"),
        "vehicle": vhToString
    },{
        "odometer": 0.0,
        "fine_odometer_since_restart": 0.366266,
       "location":{ type: "Point", coordinates: [-83.237602, 42.291447]},
        "torque_at_transmission": null,
        "engine_speed": 1028.0,
        "vehicle_speed": 0.0,
       "door_status":[{value: "driver",event: false },{ value: "passenger", event: false },{ value: "rear_left", event: false },{ value: "rear_right", event: false }],
        "accelerator_pedal_position": 9.5,
        "brake_pedal_status": false,
        "parking_brake_status": false,
        "headlamp_status": false,
        "high_beam_status": false,
        "windshield_wiper_status": false,
        "ignition_status": "run",
        "steering_wheel_angle": 12.26205,
        "fuel_level": null,
        "fuel_consumed_since_restart": 0.081,
        "transmission_gear_position": "first",
        "powertrain_torque": 33.0,
        "time_of_record": ISODate("2017-10-28T12:36:40.00Z"),
        "vehicle": vhToString
    }
]);


db.data.find({"vehicle": {$exists:true}}).forEach(function (x) {
    x.vehicle = new ObjectId(x.vehicle);
    db.data.save(x);
});
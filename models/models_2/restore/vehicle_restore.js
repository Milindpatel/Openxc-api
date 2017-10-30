db = db.getSiblingDB("OpenCar");
db.vehicles.drop();

var a = db.users.findOne({firstName: "Andrea"}, {_id: 1});
var m = db.users.findOne({firstName: "Marcel"}, {_id: 1});
var ml = db.users.findOne({firstName: "Milind"},{_id: 1});

a['_id']; m['_id']; ml['_id'];
a['_id'].toString; m['_id'].toString; ml['_id'].toString;

var aToString = a['_id'].str;
var mToString = m['_id'].str;
var mlToString = ml['_id'].str;


db.vehicles.insertMany([
    {
        "vin": "JH4KA7551SC006828",
        "make": "Acura",
        "model": "Legend",
        "user": aToString
    },  {
        "vin": "JS1GR7JAX52104246",
        "make": "Suzuki",
        "model": "Gsx R750",
        "user": mToString
    }, {
        "vin": "1GCHK29U86E255778",
        "make": "Chevrolet",
        "model": "Silverado 2500HD",
        "user": mlToString
    }
]);


db.vehicles.find({"user": {$exists:true}}).forEach(function (x) {
    x.user = new ObjectId(x.user);
    db.vehicles.save(x);
});


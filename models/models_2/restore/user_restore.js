db = db.getSiblingDB("OpenCar");
db.users.drop();
db.users.insertMany([
    {
        "firstName": "Marcel",
        "lastName": "Harvan",
        "password": "SomePassword",
        "email": "marcel@harvan.com"
    }, {
        "firstName": "Andrea",
        "lastName": "Amado",
        "password": "SomePassword",
        "email": "andrea@amado.com"
    }, {
        "firstName": "Nirmal",
        "lastName": "Panchal",
        "password": "SomePassword",
        "email": "nirmal@pancher.com"
    }, {
        "firstName": "Milind",
        "lastName": "Patel",
        "password": "SomePassword",
        "email": "milind@patel.com"
    }, {
        "firstName": "Shadab",
        "lastName": "Sheikh",
        "password": "SomePassword",
        "email": "shadab@sheikh.com"
    }, {
        "firstName": "Damini",
        "lastName": "Verma",
        "password": "SomePassword",
        "email": "damini@verma.com"
    }
]);
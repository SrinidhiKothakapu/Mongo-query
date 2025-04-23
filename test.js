db.cars.insertOne({model:"m1"});

db.cars.insertMany([
    {model:"m2"},
    {model:"m3"},
]);

db.cars.updateMany({},{$set:{price:"20k"}});

db.cars.updateOne({model:"m2"},{$set:{price:"30k"}});

db.cars.updateOne({model:"m1"},{$set:{variant:["v1","v2","v3"]}});

db.cars.updateMany({},{$set:{rating:5}});

db.cars.updateMany({},{$rename:{rating:"points"}});

db.cars.updateMany({},{$set:{price:["hyd:20k","del:30k","mum:40k"]}});

db.cars.updateMany({},{$set:{variant:"v1"}});

db.cars.updateOne({model:"m3"},{$set:{variant:["v2","v3"]}})

db.cars.updateOne({model:"m3"},{$push:{variant:"v1"}})

db.cars.updateOne({model:"m3"},{$pull:{variant:"v2"}})

db.employees.findOne({points:{$eq:5}});

db.cars.find().skip(1).limit(1);

db.cars.insertOne({model:"m5"});

db.cars.insertOne({model:"m4"});
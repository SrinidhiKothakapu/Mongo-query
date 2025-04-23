db.employees.insertOne({
name: "Test",
email: "test@gmail.com",
nationality: "India"
})
db.employees.find();
db.employees.findOne();
db.employees.deleteOne({email: "Test"});
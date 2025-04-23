db.employees.find({},{_id:0,name:1})

db.employees.find(
    {email: "amy@gmail.com"},
    {department: 1, name: 1, _id: 0}
)

db.employees.find(
    {email: "amy@gmail.com"},
    {department: 1, name: 1,email:1, _id: 0}
)
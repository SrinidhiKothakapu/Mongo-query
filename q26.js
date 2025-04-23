//aggregation framework
db.employees.aggregate([
    {}, //pipeline 1
    {}, //pipeline 2
    {}, //pipeline 3
  ]);
  
  db.employees.aggregate([{ $match: { department: { $eq: "HR" } } }]);
  
  db.employees.aggregate([{ $project: { _id: 0, name: 1, department: 1 } }]);
  
  db.employees.aggregate([
    { $match: { department: { $eq: "HR" } } },
    { $project: { _id: 0, name: 1, department: 1 } },
  ]);
  
  db.employees.aggregate([
    { $match: { department: { $eq: "HR" } } },
    { $addFields: { Bonus: "NA" } },
    { $project: { _id: 0, name: 1, department: 1, Bonus: 1 } },
    { $sort: { name: 1 } },
    { $skip: 1 },
    { $limit: 1 },
  ]);
  
  db.employees.aggregate([
    { $match: { department: { $eq: "HR" } } },
    { $project: { _id: 0, name: 1, department: 1, Bonus: "NA" } },
    { $sort: { name: 1 } },
    { $skip: 1 },
    { $limit: 1 },
  ]);
  
  db.employees.aggregate([
    { $group: { 
      _id: "$department", 
      total: { $sum: "$salary" } } },
  ]);
  
  db.employees.aggregate([
      {$match:{department:{$in:["HR","IT"]}}},
      { $group: { 
        _id: "$department", 
        total: { $sum: "$salary" } } },
    ]);
  
  db.employees.aggregate([
      {$match:{name:{$exists:true}}},
      {$project:{_id:0,name:1,location:1}},
      {$unwind:"$location"}
  ])
  
  
  db.employees.aggregate([
      {$match:{department:{$in:["HR","IT"]}}},
      {$project:{
          department:1,
          salary:1,
          salaryInt:{$convert:{input:"$salary",to:"int"}},
      }},
      { $group: { 
        _id: "$department", 
        total: { $sum: "$salaryInt" } } },
    ]);
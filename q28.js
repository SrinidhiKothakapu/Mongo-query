db.students.insertOne({
  studentName: "John",});

  db.students.find()

  db.subjects.insertOne({
    subjectName: "Math",});

    db.subjects.find()

    db.marks.insertOne({
      studentId: ObjectId("6808a7df6ebc768c7ab5f899"),
      subjectId: ObjectId("6808a81c6ebc768c7ab5f89a"),
      score: 95,
    });

    db.marks.find(
        { studentId: ObjectId("6808a7df6ebc768c7ab5f899") },
        { _id: 0, studentName: 1, subjectName: 1, score: 1 }
    )

db.marks.aggregate([
    {
        $lookup: {
            from: "students",
            localField: "studentId",
            foreignField: "_id",
            as: "students",
        },
    
    },
    {
        $lookup: {
            from: "subjects",
            localField: "subjectId",
            foreignField: "_id",
            as: "subjects",
        },
    },
    {$unwind: "$students"},
    {
        $project: {
            _id: 0,
            studentName: "$students.studentName",
            subjectName: "$subjects.subjectName",
            score: 1,
        },
    },
])
//view
db.createView(
    "HREmployees",
      "employees",
       [ { $match: { department: "HR" } } 
        ]
    )

db.HREmployees.find()
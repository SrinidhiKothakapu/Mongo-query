db.posts.aggregate(
[
{
    $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user"
    }
},
]
);
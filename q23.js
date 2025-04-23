//use facebook-db
db.createCollection("users")

db.users.insertMany(
    [
        {
            name: "name1",
          },
          {
            name: "name2",
          },
    ]
)

db.createCollection("posts")

db.posts.insertMany(
    [
        {
            title: "title1",
            desc: "desc1",
            userId: ObjectId("68086e8f52cbfc6aacb5f899"),
          },
          {
            title: "title2",
            desc: "desc2",
            userId: ObjectId("68086e8f52cbfc6aacb5f899"),
          },
          {
            title: "title3",
            desc: "desc3",
            userId: ObjectId("68086e8f52cbfc6aacb5f89a"),
          }
    ]
)

db.createCollection("userPosts")

db.userPosts.insertMany([ 
    {
        title: "title1",
        desc: "desc1",  
        name: "name1",
    },
    {
        title: "title2",
        desc: "desc2",  
        name: "name2",
    },
    {
        title: "title3",
        desc: "desc3",  
        name: "name3",
    },
]);

db.userPosts.find({},{_id:0,name:1,title:1})
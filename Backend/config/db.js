const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://" + process.env.MONGODB_ID + "@cluster0.dlkfzsy.mongodb.net/test",
    {
      useNewUrlParser : true,
      useUnifiedTopology : true
      
    }
  )
  .then(() => console.log("connected to Mongo Db"))
  .catch((err) => console.log("log fail", err));


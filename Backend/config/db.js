const mongoose = require("mongoose");
const URI = process.env.MONGODB_URL;
mongoose
  .connect('mongodb://idc4k:Jrmk70@2025@cluster0.dlkfzsy.mongodb.net/test',
    {
      useNewUrlParser: true,
      
    }
  )
  .then(() => console.log("connexion reussit"))
  .catch((err) => console.log("log fail", err));


const mongoose = require('mongoose');
const { isEmail } = require('validator');
const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        max: 1024,
        minlength: 6
      },
      bio:{
        type:String,
        max:1024
      },
      followers:{
        type:[String]
      },
      followings:{
        type:[String]
      },
      likes:{
        type: [String]
      }
    },
    {
        timestamps:true,
    }
);


const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
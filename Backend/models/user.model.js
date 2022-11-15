const mongoose = require('mongoose');
const { isEmail } = require('validator');

const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true
      },
      first_name: {
        type: String,
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
      picture:{
        type:String,
        default: ""
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

//Avant de suvegarder dans la BD crypter password
userSchema.pre("save",async function(next) {
    const salt =  await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
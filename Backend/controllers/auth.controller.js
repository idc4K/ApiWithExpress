const UserModel = require('../models/user.model');



module.exports.signUp = async (req,res) =>{
    console.log(req.body);
    const {username,first_name, email,password} = req.body;

    try{
        const user = await UserModel.create({username,first_name,email,password});
        res.status(201).json({user: user});
    }
    catch(err){
        res.status(200).send({err});
    }
};
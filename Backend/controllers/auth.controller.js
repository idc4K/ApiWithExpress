const UserModel = require('../models/user.model');



module.exports.signUp = async (req,res) =>{
    console.log(req.body);
    const {name,pseudo,email,password} = req.body;

    try{
        const user = await UserModel.create({name,pseudo,email,password});
        res.status(201).json({user: user});
    }
    catch(err){
        res.status(200).send({err});
    }
};
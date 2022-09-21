const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;


//GET ALL USERS
module.exports.GetAllUsers = async (req,res) =>{
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
};

//GET USER BY ID
module.exports.UserInfos = async (req,res) =>{
   console.log(req.params);
   if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown :' + req.params.id);

   UserModel.findById(req.params.id,(err,docs) =>{
    if(!err) res.send(docs);
    else console.log('ID unknown : '+err);
   }).select('-password');
};
//UPDATE USER
module.exports.UpdateUser = async (req,res) =>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown :' + req.params.id);
    try{
        await UserModel.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set:{
                    bio:req.body.bio
                }
            },
            { new:true, upsert:true, setDefaultsOnInsert:true },
            (err,docs) =>{
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ messageif: err });
            }

        ).clone();
        
    } catch(err){
        return res.status(500).json({messagepartout:err});
    }
};

module.exports.DeleteUser = async (req,res) =>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown :' + req.params.id);
    
    try{
        await UserModel.remove({ _id: req.params.id}).exec();
        return res.status(200).json({message: "User deleted successfully"});
    } catch(err){
        return res.status(500).json({message : err});
    }
};
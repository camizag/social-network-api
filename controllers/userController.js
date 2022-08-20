const { User, Comment } = require('../models');


const userController = {
    getAllUsers:  async(req,res)=>{
       try{
            const users = await User.find();
            res.status(200).json(users);
        
       }catch(err){
            res.status(500).json(err);
       }
    },

    getOneUser: async(req,res)=>{
        try{
            const users = await User.findOne({_id: req.params.userId});
            const userExists = await User.exists({_id: req.params.userId});
            if(!userExists){
                res.status(400).json({message: 'User not found'});
            }
            res.status(200).json(users);
        }catch(err){
         res.status(500).json(err);
        }
     },

     createUser: async(req,res)=>{
        try{
            const createUser = await User.create(req.body);
            res.status(200).json(createUser);
        }catch(err){
            res.status(500).json(err);
        }
     },

     updateUser: async(req,res)=>{
        try{    
            const users = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: req.body},
                {runValidators: true, new: true}
            );
            res.status(200).json(users);
        }catch(err){
            res.status(500).json({message: 'User not updated'});
        }
     },

     deleteUser: async(req, res)=>{
        try{
           const findUser = await User.findOne({_id: req.params.userId});

            await User.findOneAndDelete({_id: findUser._id});

            await Comment.find({username: findUser.username}).remove();
            res.status(200).send({message: 'User deleted'});
        }catch(err){
            res.status(500).json({message: 'User not deleted'});
        }
     },

     addFriend: async(req,res)=>{
        try{
            const addFriend = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: {friends: req.params.friendId}},
                {runValidators: true, new: true},
            );
            res.status(200).json(addFriend);
        }catch(err){
            res.status(500).send({message: 'Friend not added'})
        }
     },

     removeFriend: async(req,res)=>{
        try{
            const removeFriend = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$pull: {friends: req.params.friendId}},
                {runValidators: true, new: true},
            );
            res.status(200).json(removeFriend);
        }catch(err){
            res.status(500).send({message: 'Friend not added'})
        }
     }

}

module.exports = userController;
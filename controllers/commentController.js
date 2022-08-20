const { Comment, User } = require('../models');

const commentController = {

    getAllComments: async (req,res)=>{
        try{
            const comments = await Comment.find();
            res.status(200).json(comments);
        }catch(err){
            res.status(500).json(err);
        }
     },

    getOneComment: async (req,res)=>{
        try{
            const comments = await Comment.findOne({_id: req.params.commentId});

            const commentExists = await Comment.exists({_id: req.params.commentId});
            if(!commentExists){
                res.status(400).json({message: 'Thought not found with that id'});
            }
            res.status(200).json(comments);
        }catch(err){
            res.status(500).json(err);
        }
     },

    createComment: async(req,res)=>{
        try{
           const createComment = await Comment.create(req.body);
            
            await User.findOneAndUpdate(
                {_id: req.body.userId},
                {$addToSet: {comments:  createComment._id}},
                {runValidators: true, new: true}
            );
            res.status(200).json(createComment);
        }catch(err){
            res.status(500).json(err);
        }
    },

    updateComment: async(req,res)=>{
        try{
            const updatedComment = await Comment.findOneAndUpdate(
                {_id: req.params.commentId},
                {$set: req.body},
                {runValidators: true, new: true}
            );
            res.status(200).json(updatedComment);

        }catch(err){
            res.status(500).send({message: 'Cannot update thought by its id'});
        }
    },
    
    deleteComment: async(req,res)=>{
        try{    
            await Comment.findOneAndDelete({_id: req.params.commentId});
            res.status(200).send({message: 'Tought successfully deleted'});
        }catch(err){
            res.status(500).send({message: 'Cannot update thought by its id'});
        }
    },

    createInteraction: async(req,res)=>{
        try{
            const createInteraction = await Comment.findOneAndUpdate(
                {_id: req.params.commentId},
                {$addToSet: {interactions: req.body}},
                {runValidators: true, new: true},
            );
            res.status(200).json(createInteractions);
        }catch(err){
            res.status(500).send({message: 'Cannot create the reaction'})
        }
    },

    deleteInteraction: async(req,res)=>{
        try{

            await Comment.findOneAndUpdate(
                {_id: req.params.commentId},
                {$pull: {interactions: {_id: req.params.interactionId}}},
                {runValidators: true, new: true},
            );

            res.status(200).send({message: 'Reaction deleted'})
        }catch(err){
            res.status(500).send({message: 'Cannot delete the reaction'})
        }
    }
}

module.exports = commentController;
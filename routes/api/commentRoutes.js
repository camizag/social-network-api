const router = require('express').Router();
const { getAllComments, getOneComment, createComment, updateComment, deleteComment, createInteraction, deleteInteraction } = require('./../../controllers/commentController');

//api/comments
router.route('/').get(getAllComments).post(createComment);

//api/comments/:toughtId
router.route('/:commentId').get(getOneComment).put(updateComment).delete(deleteComment);

//api/comments/:thoughtId/reactions
router.route('/:commentId/interactions').put(createInteraction);

//api/comments/:thoughtId/reactions/:reactionId
router.route('/:commentId/interactions/:interactionId').delete(deleteInteraction);

module.exports = router;
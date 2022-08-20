const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
    interactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{
    toJSON: {
      getters: true,
    },
    id: false,
});

const commentSchema = new mongoose.Schema({
    commentText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [interactionSchema],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});


commentSchema.virtual('interactionCount').get(function () {
    return this.interactions.length;
})

const Comment = mongoose.model('Comment', commentSchema);
const handleError = (error) => console.log(error);

module.exports = Comment;
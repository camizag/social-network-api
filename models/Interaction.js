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

const Interaction = mongoose.model('interaction', interactionSchema);
const handleError = (error) => console.log(error);

module.exports = Interaction;
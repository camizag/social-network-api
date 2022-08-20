const { Comment } = require('./../models');

const seedComment = async () => {
    await Comment.create(
        {_id: '62d9733226bfdf20564153a1', thoughtText: 'Once upon a time...', username: 'user1'},
        {_id: '62d9733226bfdf20564153a2', thoughtText: 'And it was gone with the wind.', username: 'user2', reactions: {reactionBody: 'Nice one!', username: 'user1'}},
        {_id: '62d9733226bfdf20564153a3', thoughtText: 'Not all who wander are lost', username: 'daniellago', reactions: {reactionBody: 'I liked that one.', username: 'user1'}},
        {_id: '62d9733226bfdf20564153a4', thoughtText: 'Spooky season!', username: 'user3', reactions: {reactionBody: 'Yes!', username: 'user1'}},
        {_id: '62d9733226bfdf20564153a5', thoughtText: 'And it goes like this---', username: 'user3', reactions: {reactionBody: 'Cool!', username: 'user2'}},
    )
};

module.exports = seedComment;
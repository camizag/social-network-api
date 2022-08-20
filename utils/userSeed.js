const { User } = require('./../models');

const seedUsers = async () => {
    await User.create(
        {_id: '62d9733226bfdf20564153f1', username: 'user1', email: 'user1@mail.com', thoughts: '62d9733226bfdf20564153a1',friends: ['62d9733226bfdf20564153f2', '62d9733226bfdf20564153f3', '62d9733226bfdf20564153f4', '62d9733226bfdf20564153f5']},
        {_id: '62d9733226bfdf20564153f2', username: 'user2', email: 'user2@mail.com', thoughts: '62d9733226bfdf20564153a2', friends: ['62d9733226bfdf20564153f1', '62d9733226bfdf20564153f3', '62d9733226bfdf20564153f4', '62d9733226bfdf20564153f5']},
        {_id: '62d9733226bfdf20564153f3', username: 'user3', email: 'user3@mail.com', thoughts: '62d9733226bfdf20564153a3', friends: ['62d9733226bfdf20564153f1', '62d9733226bfdf20564153f2', '62d9733226bfdf20564153f4', '62d9733226bfdf20564153f5']},
        {_id: '62d9733226bfdf20564153f4', username: 'user4', email: 'user4@mail.com', thoughts: '62d9733226bfdf20564153a4', friends: ['62d9733226bfdf20564153f1', '62d9733226bfdf20564153f2', '62d9733226bfdf20564153f3', '62d9733226bfdf20564153f5']},
        {_id: '62d9733226bfdf20564153f5', username: 'user5', email: 'user5@mail.com', thoughts: '62d9733226bfdf20564153a5', friends: ['62d9733226bfdf20564153f1', '62d9733226bfdf20564153f2', '62d9733226bfdf20564153f3', '62d9733226bfdf20564153f4']},
    )
};

module.exports = seedUsers;
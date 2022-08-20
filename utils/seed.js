const connection = require('../config/connection');
const { User, Comment } = require('../models')
const seedUsers = require('./userSeed');
const seedComment = require('./commentSeed');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});
  await Comment.deleteMany({});
  await Comment.collection.insertOne({
    thoughtText: 'UCLA',
    username: "hector",
    interactions: [],
  });
  await User.collection.insertOne({
    username: "hector",
    email: "hola@mail.com",
    comments: [],
    friends: []
  });
  console.info('Seeding complete!');
  process.exit(0);
});
const connection = require('./../config/connection');
const seedUsers = require('./userSeed');
const seedThoughts = require('./commentSeed');
const { User, Comment } = require('./../models');
const seedComment = require('./commentSeed');

const seedData = async () => {
    await connection();
    await User.deleteMany();
    console.log('\n----- USER COLLECTION HAS BEEN WIPED! -----');
    await Comment.deleteMany();
    console.log('\n----- THOUGHT COLLECTION HAS BEEN WIPED! -----');
    await seedUsers();
    console.log('\n----- USERS SEEDED SUCCESSFULLY! -----');
    await seedComment();
    console.log('\n----- THOUGHTS SEEDED SUCCESSFULLY! -----\n');
    process.exit();
}

seedData();
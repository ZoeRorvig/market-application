const { User } = require('../models');

const userData = [
    {
        username: '',
        email: '',
        password: '',

    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
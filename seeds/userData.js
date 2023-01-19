const { User } = require('../models');

const userData = [
    {
        username: 'ashketchum',
        email: 'ash@ketchum.com',
        password: 'catchemall',

    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
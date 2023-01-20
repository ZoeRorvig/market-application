const { User } = require('../models');

const userData = [
    {
        username: 'ashketchum',
        email: 'ash@ketchum.com',
        password: 'catchemall',

    },
    {
        username: 'mareepSheep',
        email: 'mareep@sheep.com',
        password: 'baaaZap',

    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
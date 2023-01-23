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

    },
    {
        username: 'curiousGeorge',
        email: 'curious@george.com',
        password: 'sillyMonkey1',

    },
    {
        username: 'beauty&Beast',
        email: 'belle@beauty.com',
        password: 'luv2read',

    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
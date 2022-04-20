const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const generateToken = (user) => {
    const object = {
        userId: user.id,
        /* expire: dayjs().add(120, 'minutes').unix() */
    }
    return jwt.sign(object, 'keycode')
}

module.exports = {
    generateToken
}
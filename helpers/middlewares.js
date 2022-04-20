const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const usersModel = require('../models/users.model');


const checkToken = async (req, res, next) => {

    //1. checking whether the token is included within the header.
    console.log(req.body);
    if (!req.headers['authentication']) {
        return res.json({ error: 'authentication header is not include' })
    }

    //2. checking if the token is correct and its exceptions

    const token = req.headers['authentication'];

    let object;
    try {
        object = jwt.verify(token, 'keycode');
    } catch (error) {
        return res.json({ error: 'tokin invalid' })
    }

    /* console.log(object.expire) */

    //3. Checking token to be active

    /* const currentDate = dayjs().unix() //creamos una variable para que esté más controlado
    if (currentDate > object.expire) {
        return res.json({ error: 'your token is out of date. Please generate a new one.' })
    } */

    console.log(object.userId)
    const [user] = await usersModel.getByID(object.userId)

    req.user = (user[0])

    next()


};

module.exports = {
    checkToken
}
const router = require('express').Router();
const usersModel = require('../../models/users.model');
const postModel = require('../../models/posts.model');
const bcrypt = require('bcryptjs');
const utils = require('../../helpers/utils');
const { checkToken } = require('../../helpers/middlewares');


//SIGN-IN
router.post('/sign-in', async (req, res) => {
    console.log(req.body);

    //Hashing password
    const hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash;
    console.log(hash);

    //Creating new user
    try {
        const [user] = await usersModel.create(req.body)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
});

//LOG-IN
router.post('/log-in', async (req, res) => {

    // Considering invalid email and/or password
    const [result] = await usersModel.getByNickname(req.body.nickname)
    if (result.length === 0) {
        return res.json({ error: 'invalid email and/or password' })
    };
    // Creating the user object
    const user = result[0];
    console.log(user);

    // Validating password
    const validation = bcrypt.compareSync(req.body.password, user.password);
    if (!validation) {
        return res.json({ error: 'invalid nickname and/or password' })
    } else {
        return res.json({
            success: 'valid nickname',
            token: utils.generateToken(user)

        });
    };

});

//FEED
router.get('/feed', async (req, res) => {
    try {
        const [feed] = await postModel.getAll();
        res.json(feed);
    } catch (error) {
        res.json(error)
    }

});

//PERSONAL PROFILE
router.get('/profile', checkToken, (req, res) => {
    res.json(req.user);
});




module.exports = router;
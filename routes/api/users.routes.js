const router = require('express').Router();
const usersModel = require('../../models/users.model');
const bcrypt = require('bcryptjs');

router.post('/signin', async (req, res) => {
    console.log(req.body)
    try {

        const [user] = await usersModel.create(req.body)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
});

router.post('/login', async (req, res) => {

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
        return res.json({ success: 'valid nickname' });
    };


});


module.exports = router;
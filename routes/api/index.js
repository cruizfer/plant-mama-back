const router = require('express').Router();
const { checkToken } = require('../../helpers/middlewares');

router.use('/user', require('./users.routes.js'));
router.use('/posts', require('./posts.routes.js'))


module.exports = router
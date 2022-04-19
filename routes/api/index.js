const router = require('express').Router();

router.use('/', require('./users.routes.js'))

module.exports = router
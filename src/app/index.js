const router = require('express').Router();

router.use('/users', require('./modules/users/route'));

module.exports = router;
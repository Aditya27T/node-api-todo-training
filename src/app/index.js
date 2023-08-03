const router = require('express').Router();

router.use('/users', require('./modules/users/route'));
router.use('/notes', require('./modules/notes/route'));

module.exports = router;
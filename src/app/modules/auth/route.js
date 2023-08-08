const router = require('express').Router();
const commands = require('./command/controller');


router.post('/register', commands.register);
router.post('/login', commands.login);

module.exports = router;
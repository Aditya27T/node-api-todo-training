const commands = require('./commands/controller');
const queries = require('./queries/controller');
const express = require('express');
const router = express.Router();
const jwtAuth = require('../../../auth/jwt.auth.js');


router.get('/', jwtAuth.verifyToken, queries.findAllUsers);
router.get('/:id', jwtAuth.verifyToken, queries.findOneUser);
router.post('/register', commands.register);
router.post('/login', commands.login);

module.exports = router;
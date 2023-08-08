const commands = require('./commands/controller');
const queries = require('./queries/controller');
const express = require('express');
const router = express.Router();
const jwtAuth = require('../../../auth/jwt.auth.js');


router.get('/', jwtAuth.verifyTokenAdmin, queries.findAllUsers);
router.get('/:id', jwtAuth.verifyTokenAdmin, queries.findOneUser);
router.put('/:id', jwtAuth.verifyTokenAdmin, commands.updateUser);
router.delete('/:id', jwtAuth.verifyTokenAdmin, commands.deleteUser);

module.exports = router;
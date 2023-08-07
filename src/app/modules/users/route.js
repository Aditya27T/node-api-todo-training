const commands = require('./commands/controller');
const queries = require('./queries/controller');
const express = require('express');
const router = express.Router();


<<<<<<< Updated upstream
router.get('/', queries.findAllUsers);
router.get('/:id', queries.findOneUser);
router.post('/', commands.createUser);
=======
router.get('/', jwtAuth.verifyTokenAdmin, queries.findAllUsers);
router.get('/:id', jwtAuth.verifyTokenAdmin, queries.findOneUser);
router.post('/register', commands.register);
router.post('/login', commands.login);
>>>>>>> Stashed changes

module.exports = router;
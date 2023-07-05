const commands = require('./commands/controller');
const queries = require('./queries/controller');
const express = require('express');
const router = express.Router();


router.get('/', queries.findAllUsers);
router.get('/:id', queries.findOneUser);
router.post('/', commands.createUser);

module.exports = router;
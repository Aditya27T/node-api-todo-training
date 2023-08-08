const router = require('express').Router();
const queries = require('./queries/controller');
const command = require('./command/controller');
const jwtAuth = require('../../../auth/jwt.auth.js');


router.get('/', jwtAuth.verifyToken, queries.findAllNotes);
router.get('/:id', jwtAuth.verifyToken, queries.findOneNote);
router.post('/', jwtAuth.verifyToken, command.createNotes);
router.put('/:id', jwtAuth.verifyToken, command.updateNotes);
router.delete('/:id', jwtAuth.verifyToken, command.deleteNotes);

module.exports = router;
const router = require('express').Router();
const queries = require('./queries/controller');
const command = require('./command/controller');


router.get('/', queries.findAllNotes);
router.get('/:id', queries.findOneNote);
router.post('/', command.createNotes);
router.put('/:id', command.updateNotes);
router.delete('/:id', command.deleteNotes);

module.exports = router;
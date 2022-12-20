const express = require('express');
const router = express.Router();

const personApiController = require('../../api/PersonAPI');

router.get('/', personApiController.getPersons);
router.get('/:personId', personApiController.getPersonById);
router.post('/', personApiController.createPerson);
router.put('/', personApiController.updatePerson);
router.delete('/', personApiController.deletePerson);

module.exports = router;
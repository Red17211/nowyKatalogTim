const express = require('express');
const router = express.Router();

const personController = require('../controllers/osobaController');

router.get('/', personController.showOsobaList);
router.get('/dodajOsobe', personController.showDodajOsobe);
router.get('/edycjaOsobe/:personId', personController.showEditPage);
router.get('/szczegolyOsoby/:personId', personController.showPersonDetails);
router.get('/added', personController.showAddedConfirmation);
router.get('/editedOsoba', personController.showEditedConfirmation);
router.get('/deleted', personController.showDeletedConfirmation);
router.get('/PytaniePotwierdzUsunOsoby', personController.showConfirmPage);

module.exports = router;

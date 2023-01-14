const express = require('express');
const router = express.Router();
// podłączamy żądania http do metod w kontrolerze
const personController = require('../controllers/osobaController');

router.get('/', personController.showOsobaList);
router.get('/add', personController.showDodajOsobe);
router.get('/edit/:personId', personController.showEditPage);
router.get('/details/:personId', personController.showPersonDetails);
router.get('/added', personController.showAddedConfirmation);
router.get('/editedOsoba', personController.showEditedConfirmation);
router.get('/deleted', personController.showDeletedConfirmation);
router.get('/PytaniePotwierdzUsunOsoby', personController.showConfirmPage);

router.post('/add', personController.addPerson);
router.post('/edit', personController.updatePerson);
router.get('/delete/:personId', personController.deletePerson);


module.exports = router; // eskport obiekt routera do użycia w innych częściach aplikacji

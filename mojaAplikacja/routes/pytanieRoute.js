const express = require('express');
const router = express.Router();

const questionController = require('../controllers/pytanieController');
router.get('/', questionController.showListaPytaniePytanie);
router.get('/dodajPytanie', questionController.showEgzaminDodajPytanie);

router.get('/details/:questionId', questionController.showExamDetails);
router.get('/edit/:questionId', questionController.showEditPage);
router.get('/addedKom', questionController.showAddedConfirmation);
router.get('/editedPytanieKom', questionController.showEditedConfirmation);
router.get('/deletedKom', questionController.showDeletedConfirmation);


module.exports = router;
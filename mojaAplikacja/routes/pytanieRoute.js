const express = require('express');
const router = express.Router();

const questionController = require('../controllers/pytanieController');
router.get('/', questionController.showListaPytaniePytanie);
router.get('/dodajPytanie', questionController.showEgzaminDodajPytanie);

router.get('/szczegółyPytań/:examId', questionController.showExamDetails);
//router.get('/edit/:examId', questionController.showEditPage);
//router.get('/addedKom', questionController.showAddedConfirmation);
//router.get('/editedPytanie', questionController.showEditedConfirmation);
//router.get('/deletedKom', questionController.showDeletedConfirmation);
//router.get('/edytujPytanie', questionController.showConfirmPage);

module.exports = router;
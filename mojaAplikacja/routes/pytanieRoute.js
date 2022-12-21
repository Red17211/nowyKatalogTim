const express = require('express');
const router = express.Router();

const questionController = require('../controllers/pytanieController');
router.get('/', questionController.showListaPytaniePytanie);
router.get('/dodajPytanie', questionController.showEgzaminDodajPytanie);

router.get('/details/:questionId', questionController.showQuestionDetails);
router.get('/edit/:questionId', questionController.showEditPage);
router.get('/addedKom', questionController.showAddedConfirmation);
router.get('/editedPytanieKom', questionController.showEditedConfirmation);
router.get('/deletedKom', questionController.showDeletedConfirmation);

router.post('/add', questionController.addQuestion);
router.post('/edit', questionController.updateQuestion);
router.get('/delete/:questionId', questionController.deleteQuestion);

module.exports = router;
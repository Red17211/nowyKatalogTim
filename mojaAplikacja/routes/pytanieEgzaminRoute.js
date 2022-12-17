const express = require('express');
const router = express.Router();

const anExamController = require('../controllers/pytanieEgzaminController');
router.get('/', anExamController.showListaPytanieEgzamin);

router.get('/pytanie', anExamController.showPytanieRozpEgzamin);
router.get('/szczegolyUdzielonychOdpowiedzi/:examId', anExamController.showExamDetails);
router.get('/edit/:examId', anExamController.showEditPage);
router.get('/KomunikatZakończeniaEgzaminu', anExamController.showAddedConfirmation);
router.get('/edited', anExamController.showEditedConfirmation);
router.get('/deleted', anExamController.showDeletedConfirmation);
router.get('/deleteConfirmation', anExamController.showConfirmPage);

module.exports = router;
ala ma kota
a sierotka ma rysia
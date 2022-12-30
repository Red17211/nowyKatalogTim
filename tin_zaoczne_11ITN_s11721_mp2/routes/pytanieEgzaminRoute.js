const express = require('express');
const router = express.Router();

const anExamController = require('../controllers/pytanieEgzaminController');
router.get('/', anExamController.showListaPytanieEgzamin);

router.get('/egzamin/:subject', anExamController.showPytanieRozpEgzamin);
router.get('/wyborEgzaminu', anExamController.wyborTematu);
router.get('/details/:questionExamId', anExamController.showQuestionExamDetails);
router.get('/edit/:questionExamId', anExamController.showEditPage);
router.get('/KomunikatZakonczeniaEgzaminu', anExamController.showAddedConfirmation);
router.get('/edited', anExamController.showEditedConfirmation);
router.get('/deleted', anExamController.showDeletedConfirmation);


router.post('/egzamin', anExamController.addQuestionExam);
router.post('/add', anExamController.addQuestionExam);
router.post('/edit', anExamController.updateQuestionExam);
router.get('/delete/:personId', anExamController.deleteQuestionExam);

module.exports = router;

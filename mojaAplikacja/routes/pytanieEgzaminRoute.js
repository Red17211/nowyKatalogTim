const express = require('express');
const router = express.Router();

const anExamController = require('../controllers/pytanieEgzaminController');
router.get('/', anExamController.showListaPytanieEgzamin);

router.get('/egzamin', anExamController.showPytanieRozpEgzamin);
router.get('/wyborEgzaminu', anExamController.wyborTematu);
router.get('/details/:questionExamId', anExamController.showQuestionExamDetails);
router.get('/edit/:examId', anExamController.showEditPage);
router.get('/KomunikatZakonczeniaEgzaminu', anExamController.showAddedConfirmation);
router.get('/edited', anExamController.showEditedConfirmation);
router.get('/deleted', anExamController.showDeletedConfirmation);
router.get('/deleteConfirmation', anExamController.showConfirmPage);

router.post('/add', anExamController.addQuestionExam);
router.post('/edit', anExamController.updateQuestionExam);
router.get('/delete/:personId', anExamController.deleteQuestionExam);

module.exports = router;

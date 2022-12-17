const express = require('express');
const router = express.Router();

const examController = require('../controllers/egzaminController');
router.get('/', examController.showEgzaminListaEgzaminow);

router.get('/dodajEgzamin', examController.showEgzaminDodajEgzamin);
router.get('/szczegoly/:examId', examController.showExamDetails);
router.get('/edit/:examId', examController.showEditPage);
router.get('/added', examController.showAddedConfirmation);
router.get('/edited', examController.showEditedConfirmation);
router.get('/deleted', examController.showDeletedConfirmation);
router.get('/deleteConfirmation', examController.showConfirmPage);

module.exports = router;
const express = require('express');
const router = express.Router();
//stworzenie routera dla nowego endpointu i podłączenie go do aplikacji
const examApiController = require('../../api/ExamAPI');

router.get('/', examApiController.getExams);
router.get('/:examId', examApiController.getExamById);
router.post('/', examApiController.createExam);
router.put('/', examApiController.updateExam);
router.delete('/', examApiController.deleteExam);

module.exports = router;
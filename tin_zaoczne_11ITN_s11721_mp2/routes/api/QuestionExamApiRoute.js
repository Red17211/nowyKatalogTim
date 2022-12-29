const express = require('express');
const router = express.Router();

const questionExamApiController = require('../../api/QuestionExamAPI');

router.get('/', questionExamApiController.getQuestionExams);
router.post('/', questionExamApiController.createQuestionExam);
router.get('/:questionExamId', questionExamApiController.getQuestionExamById);
router.put('/', questionExamApiController.updateQuestionExam);
router.delete('/', questionExamApiController.deleteQuestionExam);

module.exports = router;
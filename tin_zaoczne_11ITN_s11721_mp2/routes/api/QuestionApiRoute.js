const express = require('express');
const router = express.Router();

const questionApiController = require('../../api/QuestionAPI');

router.get('/', questionApiController.getQuestions);
router.get('/:questionId', questionApiController.getQuestionById);

router.post('/', questionApiController.createQuestion);
router.put('/', questionApiController.updateQuestion);
router.delete('/', questionApiController.deleteQuestion);

module.exports = router;
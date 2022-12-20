const express = require('express');
const router = express.Router();

const examApiController = require('../../api/ExamAPI');

router.get('/', examApiController.getExams);
router.post('/', examApiController.createExam);
router.put('/', examApiController.updateExam);
router.delete('/', examApiController.deleteExam);

module.exports = router;
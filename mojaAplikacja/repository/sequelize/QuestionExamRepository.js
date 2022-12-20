const QuestionExam = require("../../model/sequelize/Question_Exam");


exports.getQuestionExams = () => {
    return QuestionExam.findAll();
};

exports.getQuestionExamById = (id) => {
    return QuestionExam.findByPk(id)
};

exports.createQuestionExam = (newQuestionExamData) => {
    return QuestionExam.create({
        examId: newQuestionExamData.examId,
        questionId: newQuestionExamData.questionId,
        answer: newQuestionExamData.answer,
        answerTime: newQuestionExamData.answerTime,
        candidatePesel: newQuestionExamData.candidatePesel
    });
};

exports.updateQuestionExam = (questionExamId, questionExamData) => {
    const examId = questionExamData.question;
    const questionId = questionExamData.answer1;
    const answer = questionExamData.answer2;
    const answerTime = questionExamData.answer3;
    const candidatePesel = questionExamData.correctAnswer;
    return QuestionExam.update(questionExamData, {where: {_id: questionExamId}});
};

exports.deleteQuestionExam = (questionExamId) => {
    return QuestionExam.destroy({
       where: { _id: questionExamId }
    });
};


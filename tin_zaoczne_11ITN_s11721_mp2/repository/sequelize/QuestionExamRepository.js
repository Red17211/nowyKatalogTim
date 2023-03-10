const QuestionExam = require("../../model/sequelize/Question_Exam");
const Exam = require("../../model/sequelize/Exam");
const Person = require("../../model/sequelize/Person");
const Question = require("../../model/sequelize/Question");

exports.getQuestionExams = () => {
    return QuestionExam.findAll();
};

exports.getQuestionExamById = (questionExamId) => {
    return QuestionExam.findByPk(questionExamId);
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

exports.getQuestionsBySubject = (subject1) => {
    return QuestionExam.findAll({
        where: {
            subject: subject1
        }
    });
};

exports.updateQuestionExam = (questionExamId, questionExamData) => {
    const examId = questionExamData.question;
    const questionId = questionExamData.answer1;
    const answer = questionExamData.answer2;
    const answerTime = questionExamData.answer3;
    const candidatePesel = questionExamData.candidatePesel;
    return QuestionExam.update(questionExamData, {where: {_id: questionExamId}});
};

exports.deleteQuestionExam = (questionExamId) => {
    return QuestionExam.destroy({
       where: { _id: questionExamId }
    });
};



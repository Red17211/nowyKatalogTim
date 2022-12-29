const Question = require("../../model/sequelize/Question");


exports.getQuestions = () => {
    return Question.findAll();
};

exports.getQuestionsBySubject = (sub) => {
    return Question.findAll({
        where: {
            subject: sub
        }
    });
};

exports.getQuestionById = (questionId) => {
    let q = Question.findByPk(questionId);
    return q;
};

exports.createQuestion = (newQuestiondata) => {
    return Question.create({
        question: newQuestiondata.question,
        answer1: newQuestiondata.answer1,
        answer2: newQuestiondata.answer2,
        answer3: newQuestiondata.answer3,
        correctAnswer: newQuestiondata.correctAnswer,
        subject: newQuestiondata.subject
    });
};

exports.updateQuestion = (questionId, questionData) => {
    const question = questionData.question;
    const answer1 = questionData.answer1;
    const answer2 = questionData.answer2;
    const answer3 = questionData.answer3;
    const correctAnswer = questionData.correctAnswer;
    const subject = questionData.subject;
    return Question.update(questionData, {where: {_id: questionId}});
};

exports.deleteQuestion = (questionId) => {
    return Question.destroy({
       where: { _id: questionId }
    });
};



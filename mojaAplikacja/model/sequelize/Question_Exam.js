const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Question_Exam = sequelize.define("QuestionExam", {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    examId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    answer: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   answerTime: {
       type: Sequelize.TIME,
       allowNull: false
   },
   candidatePesel: {
       type: Sequelize.BIGINT,
       allowNull: false
   }
});

module.exports = Question_Exam;
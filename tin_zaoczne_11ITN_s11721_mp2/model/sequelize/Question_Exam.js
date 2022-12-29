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
        allowNull: false,
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
             notEmpty: {
                  msg:"Pole jest wymagane"
             },
             len: {
                 args: [1,4],
                 msg: "Pole powinno zawierać od 1 do 4 znaków"
             },
        }
    },
    answer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
             notEmpty: {
                  msg:"Pole jest wymagane"
             },
             len: {
                 args: [1,1],
                 msg: "Odpowiedź 1/2/3/4"
             },
        }
    },
   answerTime: {
       type: Sequelize.TIME,
       allowNull: false,
       validate: {
             notEmpty: {
                   msg:"Pole jest wymagane"
             },
             len: {
                 args: [2,60],
                 msg: "Pole jest wymagane"
             },
       }
   },
   candidatePesel: {
       type: Sequelize.BIGINT,
       allowNull: false,
       validate: {
            notEmpty: {
                 msg:"Pole jest wymagane"
            },
            len: {
                 args: [11,11],
                 msg: "Pole powinno zawierać 11 znaków"
            },
       }
   }
});

module.exports = Question_Exam;
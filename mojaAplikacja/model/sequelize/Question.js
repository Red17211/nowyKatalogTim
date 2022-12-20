const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Question = sequelize.define("Question", {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false
    },
   answer1: {
       type: Sequelize.STRING,
       allowNull: false
   },
    answer2: {
       type: Sequelize.STRING,
       allowNull: false
   },
    answer3: {
       type: Sequelize.STRING,
       allowNull: false
   },
    correctAnswer: {
       type: Sequelize.STRING,
       allowNull: false
   },
    subject: {
       type: Sequelize.STRING,
       allowNull: false
   }
});

module.exports = Question;
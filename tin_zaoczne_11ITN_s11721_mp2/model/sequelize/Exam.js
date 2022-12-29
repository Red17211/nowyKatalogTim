const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Exam = sequelize.define("Exam", {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    examDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false
    },
   startTime: {
       type: Sequelize.TIME,
       allowNull: false
   },
   endTime: {
          type: Sequelize.TIME,
          allowNull: true
   },
   points: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Exam;
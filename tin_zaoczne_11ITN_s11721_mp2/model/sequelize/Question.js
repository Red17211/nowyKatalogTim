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
        allowNull: false,
        validate: {
             notEmpty: {
                  msg:"errors.noValue"
             },
             len: {
                 args: [5,60],
                 msg: "errors.field5-60"
             },
        }
    },
   answer1: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
            notEmpty: {
                 msg:"errors.noValue"
            },
            len: {
                args: [3,60],
                msg: "errors.field3-60"
            },
       }
   },
    answer2: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
            notEmpty: {
                 msg:"errors.noValue"
            },
            len: {
                args: [3,60],
                msg: "errors.field3-60"
            },
       }
   },
    answer3: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
           notEmpty: {
                msg:"errors.noValue"
           },
           len: {
               args: [3,60],
               msg: "errors.field3-60"
           },
       }
   },
    correctAnswer: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
            notEmpty: {
                 msg:"errors.noValue"
            },
            len: {
                args: [3,60],
                msg: "errors.field3-60"
            },
       }
   },
    subject: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
            notEmpty: {
                 msg:"errors.noValue"
            },
            len: {
                args: [3,60],
                msg: "errors.field3-60"
            },
       }
   }
});

module.exports = Question;
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
                  msg:"Pole jest wymagane"
             },
             len: {
                 args: [5,60],
                 msg: "Pole powinno zawierać od 5 do 60 znaków"
             },
        }
    },
   answer1: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
            notEmpty: {
                 msg:"Pole jest wymagane"
            },
            len: {
                args: [3,60],
                msg: "Pole powinno zawierać od 5 do 60 znaków"
            },
       }
   },
    answer2: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
            notEmpty: {
                 msg:"Pole jest wymagane"
            },
            len: {
                args: [3,60],
                msg: "Pole powinno zawierać od 3 do 60 znaków"
            },
       }
   },
    answer3: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
           notEmpty: {
                msg:"Pole jest wymagane"
           },
           len: {
               args: [3,60],
               msg: "Pole powinno zawierać od 3 do 60 znaków"
           },
       }
   },
    correctAnswer: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
            notEmpty: {
                 msg:"Pole jest wymagane"
            },
            len: {
                args: [3,60],
                msg: "Pole powinno zawierać od 3 do 60 znaków"
            },
       }
   },
    subject: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
            notEmpty: {
                 msg:"Pole jest wymagane"
            },
            len: {
                args: [3,60],
                msg: "Pole powinno zawierać od 3 do 60 znaków"
            },
       }
   }
});

module.exports = Question;
const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');
//modele danych Sequelize. Zawierają one podstawowe kolumny z danymi
const Exam = sequelize.define("Exam", {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    examDate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                 msg:"errors.noValue"
            },
            len: {
                args: [14/12/2022],
                msg: "errors.date"
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
                msg: "errors.field2-60"
            }
        }
    },
   startTime: {
       type: Sequelize.TIME,
       allowNull: false,
       validate: {
           notEmpty: {
                msg:"errors.noValue"
           },
           len: {
               args: [5],
               msg: "errors.field5"
           },
       }
   },
   endTime: {
          type: Sequelize.TIME,
          allowNull: true
   },
   points: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
                   notEmpty: {
                        msg:"errors.noValue"
                   },
                   len: {
                       args: [1,2],
                       msg: "errors.field2"
                   },
               }
    }
});

module.exports = Exam;

//Sequelize automatycznie dodaje kolumny createdAt i updatedAt do tworzonych tabel i aktualizuje je przy każdym zapisie / aktualizacji obiektu.
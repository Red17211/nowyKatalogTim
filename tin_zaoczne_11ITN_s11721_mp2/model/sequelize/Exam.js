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
                 msg:"Pole jest wymagane"
            },
            len: {
                args: [14/12/2022],
                msg: "Wymagany format to dd/mm/rr"
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
                args: [2,60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            }
        }
    },
   startTime: {
       type: Sequelize.TIME,
       allowNull: false,
       validate: {
           notEmpty: {
                msg:"Pole jest wymagane"
           },
           len: {
               args: [5],
               msg: "Pole jest wymagane"
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
                        msg:"Pole jest wymagane"
                   },
                   len: {
                       args: [2],
                       msg: "Pole jest wymagane"
                   },
               }
    }
});

module.exports = Exam;

//Sequelize automatycznie dodaje kolumny createdAt i updatedAt do tworzonych tabel i aktualizuje je przy każdym zapisie / aktualizacji obiektu.
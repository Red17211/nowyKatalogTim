const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Person = sequelize.define("Person", {
    pesel: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        unique: true,
        validate: {
            notEmpty: {
                 msg:"Pole jest wymagane"
            },
            len: {
                args: [11,11],
                msg: "Pole powinno zawierać 11 znaków"
            }

        }
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                 msg:"Pole jest wymagane"
            },
            len: {
                args: [2,30],
                msg: "Pole powinno zawierać od 2 do 30 znaków"
            },
        }
    },
   lastName: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
           notEmpty: {
                msg:"Pole jest wymagane"
           },
           len: {
                args: [2,30],
                msg: "Pole powinno zawierać od 2 do 30 znaków"
           },
       }
   },
   permissionCode: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
          notEmpty: {
            msg:"Pole jest wymagane"
          },
          len: {
          args: [1,1],
          msg: "Pole powinno zawierać 1 znak"
          },
      }
   }
});

module.exports = Person;



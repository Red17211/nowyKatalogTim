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
                 msg: "errors.noValue"
            },
            len: {
                args: [1,11],
                msg: "errors.perror"
            }

        }
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                 msg:"errors.noValue"
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
                msg:"errors.noValue"
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
            msg:"errors.noValue"
          },
          len: {
          args: [1,1],
          msg: "Pole powinno zawierać 1 znak"
          },
      }
   },

   password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
              notEmpty: {
                msg:"errors.noValue"
              },
              len: {
                 args: [6,100],
                 msg: "errors.perror"
              }
          }
   }
});

module.exports = Person;



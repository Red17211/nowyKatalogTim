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
                args: [3,60],
                msg: "errors.field3-60"
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
                args: [3,60],
                msg: "errors.field3-60"
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
          args: [1,2],
          msg: "errors.field2"
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
                 msg: "errors.pass"
              }
          }
   }
});

module.exports = Person;



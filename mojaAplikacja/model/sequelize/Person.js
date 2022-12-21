const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Person = sequelize.define("Person", {
    pesel: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
   lastName: {
       type: Sequelize.STRING,
       allowNull: false
   },
   permissionCode: {
      type: Sequelize.INTEGER,
      allowNull: false
   }
});

module.exports = Person;



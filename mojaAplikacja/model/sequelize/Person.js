const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Person = sequelize.define("Person", {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
   pesel: {
    type: Sequelize.STRING,
    allowNull: false
   }
});

module.exports = Person;
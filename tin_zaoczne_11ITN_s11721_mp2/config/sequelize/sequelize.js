const Sequelize = require('sequelize');
//ustalamy parametry połączenia do bazy danych i tworzymy obiekt mappera ORM:
const sequelize = new Sequelize('tin-example-sequelize', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports =  sequelize;
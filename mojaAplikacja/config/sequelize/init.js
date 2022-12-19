const sequelize = require('./sequelize');

const Person = require('../../model/sequelize/Person');


module.exports = () => {



    let allPersons;
    return sequelize
        .sync({force: true})
        .then( () => {
            return Person.findAll();
        })
        .then(persons => {
            if( !persons || persons.length == 0 ) {
                return Person.bulkCreate([
                    {firstName: 'Jan', lastName: 'Kowalski', pesel: "88022708956"},
                    {firstName: 'Adam', lastName: 'Pawlak', pesel: "134564569846"},
                    {firstName: 'Krzysztof', lastName: 'Sedziszewski', pesel: "847548518418"}
                ])
                .then( () => {
                    return Person.findAll();
                });
            }
            else{
                return persons;
            }
        });
}
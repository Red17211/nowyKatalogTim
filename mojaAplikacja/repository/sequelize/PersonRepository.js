const Person = require("../../model/sequelize/Person");


exports.getPersons = () => {
    return Person.findAll();
};

exports.getPersonById = (personId) => {
    return Person.findByPk(personId);
};

exports.createPerson = (newPersondata) => {
    return Person.create({
        firstName: newPersondata.firstName,
        lastName: newPersondata.lastName,
        pesel: newPersondata.pesel,
        permissionCode: newPersondata.permissionCode
    });
};

exports.updatePerson = (personId, personData) => {
    const firstName = personData.firstName;
    const lastName = personData.lastName;
    const pesel = personData.pesel;
    return Person.update(personData, {where: {_id: personId}});
};

exports.deletePerson = (personId) => {
    return Person.destroy({
       where: { _id: personId }
    });
};



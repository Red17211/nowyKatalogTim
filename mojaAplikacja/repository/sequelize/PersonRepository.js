const Person = require("../../model/sequelize/Employee");


exports.getPersons = () => {
    return Person.findAll()''
};

//exports.getPersonById = (empId) => {
//    return Person.findById(empId,
//        {
//
//        }
//    )
//}

exports.createPerson = (newPersondata) => {
    return Person.create({
        firstName: newPersondata.firstName,
        lastName: newPersondata.lastName,
        pesel: newPersondata.pesel
    });
};

exports.updatePerson = (personId, personData) => {
    const firstName = personData.firstName;
    const lastName = personData.lastName;
    const pesel = personData.pesel;
    return Employee.update(personData, {where: {_id: empId}});
};

exports.deleteEmployee = (empId) => {
    return Employee.destroy({
       where: { _id: empId }
    });
};



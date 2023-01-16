const Person = require("../../model/sequelize/Person");
const QuestionExam = require("../../model/sequelize/Question_Exam");
const Exam = require("../../model/sequelize/Exam");

exports.getPersons = () => {
    return Person.findAll();
};

exports.getPersonById = (personId) => {
    return Person.findByPk(personId,
        {
            include: [{
                model: QuestionExam,
                as: 'answers'

            }]
        }
    );
};

exports.findByPesel = (pesel) => {
    return Person.findOne({
    where: {pesel: pesel}
    });
}


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
    const permissionCode = personData.permissionCode;
    return Person.update(personData, {where: {pesel: personId}});
};


exports.deletePerson = (personId) => {
    return Person.destroy({
       where: { pesel: personId }
    });
};



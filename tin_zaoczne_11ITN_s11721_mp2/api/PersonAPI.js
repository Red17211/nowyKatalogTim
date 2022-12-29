const PersonRepository = require('../repository/sequelize/PersonRepository');

exports.getPersons = (req, res, next) => {
    PersonRepository.getPersons()
        .then(persons => {
            res.status(200).json(persons);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getPersonById = (req, res, next) => {
    const personId = req.params.personId;
    console.log('aaaaa: ' + personId);
    PersonRepository.getPersonById(personId)
        .then(person => {
            if(!person){
                res.status(404).json({
                    message: 'Person with id: ' + personId + ' not found'
                });
            }
            else{
                res.status(200).json(person);
            }
        });
};

exports.createPerson = (req, res, next) => {
    PersonRepository.createPerson(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updatePerson = (req, res, next) => {
const personId = req.params.personId;
    PersonRepository.updatePerson(personId, req.body)
        .then(result => {
            res.status(200).json({message: 'Person updated!', person: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
exports.deletePerson = (req, res, next) => {
const personId = req.params.personId;
    PersonRepository.deletePerson(personId)
        .then(result => {
            res.status(200).json({message: 'Person removed!', person: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
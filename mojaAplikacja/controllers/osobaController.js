const PersonRepository = require('../repository/sequelize/PersonRepository');


exports.showOsobaList = (reg, res, next) => {
    PersonRepository.getPersons()
        .then(persons => {
            res.render('pagesLotnictwo/Osoba/listaOsobEgzaminowanych', {
                persons: persons,
                navLocation: 'person'
            });
        });
}
exports.showDodajOsobe = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/form', {
        person: {},
        pageTitle: 'Nowa osoba',
        formMode: 'createNew',
        btnLabel: 'Dodaj osobę',
        formAction: '/added',
        navLocation: 'person'
    });
}

exports.showPersonDetails = (reg, res, next) => {
    const empId = req.params.empId;
    PersonRepository.getPersonById(personId)
        .then(person =>{
            res.render('pagesLotnictwo/Osoba/form', {
                person: person,
                pageTitle: 'Szczegóły osoby',
                formMode: 'showDetails',
                formAction: '',
                navLocation: 'person'
            });
        });
    res.render('pagesLotnictwo/Osoba/szczegolyOsoby', {navLocation:'person'});
}
exports.showAddedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/added', {navLocation:'person'});
}
exports.showDeletedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/deleted', {navLocation:'person'});
}
exports.showEditedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/editedOsoba', {navLocation:'person'});
}
exports.showEditPage = (reg, res, next) => {
    const personId = req.params.empId;
    PersonRepository.getPersonById(personId)
        .then(person => {
            res.render('pagesLotnictwo/Osoba/form',{
                person: {person},
                pageTitle: 'Edycja osoby',
                formMode: 'edit',
                btnLabel: 'Edytuj osobę',
                formAction: '/editedOsoba',
                navLocation: 'person'
               });
        });
}
exports.showConfirmPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/PytaniePotwierdzUsunOsoby', {navLocation:'person'});
}
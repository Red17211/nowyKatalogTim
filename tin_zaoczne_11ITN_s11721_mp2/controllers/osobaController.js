const PersonRepository = require('../repository/sequelize/PersonRepository');
const QuestionRepository = require('../repository/sequelize/QuestionRepository');

exports.showOsobaList = (req, res, next) => {
    PersonRepository.getPersons()
        .then(persons => {
            res.render('pagesLotnictwo/Osoba/listaOsobEgzaminowanych', {
                persons: persons,
                navLocation: 'person'
            });
        });
}
exports.showDodajOsobe = (req, res, next) => {


    res.render('pagesLotnictwo/Osoba/form', {
        person: {},
        pageTitle: 'Nowa osoba',
//        validationErrors: err.errors,
        formMode: 'createNew',
        btnLabel: 'Dodaj osobę',
        formAction: '/Osoba/add',
        navLocation: 'person',
        validationErrors: []
    });
}

exports.showListaPytanieEgzamin = (req, res, next) => {
    let allQuestions;
    QuestionRepository.getQuestions()
        .then(questions =>{
            allQuestions = questions;
            return QuestionExamRepository.getQuestionExams();
        })
        .then(questionExams => {
            res.render('pagesLotnictwo/Pytanie_egzamin/pytanieEgzamin', {
                questionExams: questionExams,
                navLocation: 'anExam',
                allQuestions: allQuestions
            });
        });
}

exports.showPersonDetails = (req, res, next) => {
    const personId = req.params.personId;
    PersonRepository.getPersonById(personId)
        .then(person =>{
        const q = QuestionRepository.getQuestionById(1);
        console.log('OOO: ' + q._id);
            res.render('pagesLotnictwo/Osoba/form', {
                person: person,
                pageTitle: 'Szczegóły osoby',
                formMode: 'showDetails',
                formAction: '',
                navLocation: 'person',
                qr: q,
                validationErrors: []
            });
        });
}
exports.showAddedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Osoba/added', {navLocation:'person'});
}
exports.showDeletedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Osoba/deleted', {navLocation:'person'});
}
exports.showEditedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Osoba/editedOsoba', {navLocation:'person'});
}
exports.showEditPage = (req, res, next) => {
    const personId = req.params.personId;

    PersonRepository.getPersonById(personId)
        .then(person => {
            console.log('osobaController: ' + person);
            res.render('pagesLotnictwo/Osoba/form',{
                person: person,
                pageTitle: 'Edycja osoby',
                formMode: 'edit',
                btnLabel: 'Edytuj osobę',
                formAction: './',
                navLocation: 'person',
                validationErrors: []
               });
        });
}
exports.showConfirmPage = (req, res, next) => {
    res.render('pagesLotnictwo/Osoba/PytaniePotwierdzUsunOsoby', {navLocation:'person'});
}

exports.addPerson = (req, res, next) => {
    const personData = { ...req.body };
    console.log('CON: ' + personData);
    PersonRepository.createPerson(personData)
        .then( result => {
            res.redirect('/Osoba');
        })
        .catch(err => {
            err.errors.forEach(e => {
                console.log("e.path: " + e.path + ", e.type: " + e.type);
                if(e.path.includes('PRIMARY') && e.type == 'unique violation') {
                    e.message = "Podany pesel już istnieje";
                    console.log("Jestem w if");
                }
            })
            res.render('pagesLotnictwo/Osoba/form', {
                person: personData,
                pageTitle: 'Dodawanie osoby',
                formMode: 'createNew',
                btnLabel: 'Dodaj osobę',
                formAction: '/Osoba/add',
                navLocation: 'person',
                validationErrors: err.errors
            });
        });

}

exports.updatePerson = (req, res, next) => {
    const personId = req.body.pesel;
    const personData = { ...req.body };
    console.log('id: ' + personId + ', data: ' + personData);
    PersonRepository.updatePerson(personId, personData)
        .then( result => {
            res.redirect('../../Osoba/editedOsoba');
        });
}
exports.deletePerson = (req, res, next) => {
    const personId = req.params.personId;
    PersonRepository.deletePerson(personId)
        .then( () => {
            res.redirect('/Osoba')
        });
}
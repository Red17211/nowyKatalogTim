const QuestionExamRepository = require('../repository/sequelize/QuestionExamRepository');
const QuestionRepository = require('../repository/sequelize/QuestionRepository');
const ExamRepository = require('../repository/sequelize/ExamRepository');
const PersonRepository = require('../repository/sequelize/PersonRepository');

exports.showListaPytanieEgzamin = (req, res, next) => {
    let allQuestions;
    let person;
    QuestionRepository.getQuestions()
        .then(questions =>{
            allQuestions = questions;
            return QuestionExamRepository.getQuestionExams();
        })

        .then(questionExams => {
            res.render('pagesLotnictwo/Pytanie_egzamin/pytanieEgzamin', {
                questionExams: questionExams,
                navLocation: 'anExam',
                allQuestions: allQuestions,
                person: person
            });
        })

        ;
}

exports.showQuestionExamDetails = (req, res, next) => {
    let allQuestions;
    let questionExam;

    const questionExamId = req.params.questionExamId;

    QuestionRepository.getQuestions()
        .then(questions1 =>{
            allQuestions = questions1;
            console.log("Znaleziono questions: " + questions1.length);
            QuestionExamRepository.getQuestionExamById(questionExamId)
                .then(qe =>{

                    PersonRepository.getPersonById(qe.candidatePesel)
                    .then(per =>{

                        questionExam = qe;
                        res.render('pagesLotnictwo/Pytanie_egzamin/form', {

                               pageTitle: 'Szczegóły udzielonych odpowiedzi na egzaminach',
                               formMode: 'showDetails',
                               formAction: '',
                               navLocation: 'anExam',
                               allQuestions: allQuestions,
                               questionExam: questionExam,
                               person: per

                           });
                    })


                });
        });

}

exports.wyborTematu = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/wyborEgzaminu', {navLocation:'anExam'});
}

exports.showPytanieRozpEgzamin = (req, res, next) => {
    let subject = req.params.subject;
    let qts;
    let candidate;
    let allQuestions;
    QuestionRepository.getQuestionsBySubject(subject)
        .then(qts2 =>{
            PersonRepository.getPersons()
                .then(persons => {
                    res.render('pagesLotnictwo/Pytanie_egzamin/egzamin', {
                       pageTitle: 'Egzamin',
                       formAction: './',
                       navLocation: 'anExam',
                       qts: qts2,
                       allQuestions: qts2,
                       subject: subject,
                       candidate: persons[0]
                   });
                })

        });
}

exports.showEditPage = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/edytujUdzieloneOdpowiedzi', {navLocation:'anExam'});
}
exports.showAddedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/KomunikatZakonczeniaEgzaminu', {navLocation:'anExam'});
}
exports.showEditedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/edited', {navLocation:'anExam'});
}
exports.showDeletedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/deleted', {navLocation:'anExam'});
}

exports.addQuestionExam = (req, res, next) => {
//    res.render('pagesLotnictwo/Pytanie_egzamin/form', {
//        questionExam: {},
//        pageTitle: 'Manualne wprowadzanie odpowiedzi kandydatów przez administratora',
//
//        formMode: 'createNew',
//        btnLabel: 'Dodaj odpowiedź',
//        formAction: '/Pytanie_egzamin/add',
//        navLocation: 'questionExam'
//    });
}


exports.updateQuestionExam = (req, res, next) => {
    const questionExamId = req.body.questionExamId;
    const questionExamData = { ...req.body };

    QuestionExamRepository.updateQuestionExam(questionExamId, questionExamData)
        .then( result => {
            res.redirect('../../Pytanie_egzamin/edited');
        });
}

exports.deleteQuestionExam = (req, res, next) => {
    const questionExamId = req.params.questionExamId;
    QuestionExamRepository.deleteQuestionExam(questionExamId)
        .then( () => {
            res.redirect('/Pytanie_egzamin')
        });
}


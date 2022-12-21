const QuestionExamRepository = require('../repository/sequelize/QuestionExamRepository');
const QuestionRepository = require('../repository/sequelize/QuestionRepository');
const ExamRepository = require('../repository/sequelize/ExamRepository');

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

exports.showQuestionExamDetails = (req, res, next) => {
    let allQuestions;
    QuestionRepository.getQuestions()
        .then(questions =>{
            allQuestions = questions;
            return QuestionExamRepository.getQuestionExams();
        })
   .then(questionExam =>{
       const questionExamId = req.params.questionExamId;
        let qe = QuestionExamRepository.getQuestionExamById(questionExamId);
       console.log("999: " + qe.answer)
       res.render('pagesLotnictwo/Pytanie_egzamin/form', {
           questionExam: qe,
           pageTitle: 'Szczegóły udzielonych odpowiedzi na egzaminach',
           formMode: 'showDetails',
           formAction: '',
           navLocation: 'anExam',
           allQuestions: allQuestions
       });
       });
}

exports.wyborTematu = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/wyborEgzaminu', {navLocation:'anExam'});
}

exports.showPytanieRozpEgzamin = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/egzamin', {navLocation:'anExam'});
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
exports.showConfirmPage = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/PytPotUsunPytEgzamin', {navLocation:'anExam'});
}
exports.getExam = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/PytPotUsunPytEgzamin', {navLocation:'anExam'});
}

exports.addQuestionExam = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/form', {
        questionExam: {},
        pageTitle: 'Manualne wprowadzanie odpowiedzi kandydatów przez administratora',

        formMode: 'createNew',
        btnLabel: 'Dodaj odpowiedź',
        formAction: '/Pytanie_egzamin/add',
        navLocation: 'questionExam'
    });
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


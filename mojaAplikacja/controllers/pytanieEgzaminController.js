const QuestionExamRepository = require('../repository/sequelize/QuestionExamRepository');
const QuestionRepository = require('../repository/sequelize/QuestionRepository');

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

exports.wyborTematu = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/wyborEgzaminu', {navLocation:'anExam'});
}

exports.showPytanieRozpEgzamin = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/egzamin', {navLocation:'anExam'});
}
exports.showExamDetails = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/szczegolyUdzielonychOdpowiedzi', {navLocation:'anExam'});
}
exports.showEditPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/edytujUdzieloneOdpowiedzi', {navLocation:'anExam'});
}
exports.showAddedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/KomunikatZakonczeniaEgzaminu', {navLocation:'anExam'});
}
exports.showEditedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/edited', {navLocation:'anExam'});
}
exports.showDeletedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/deleted', {navLocation:'anExam'});
}
exports.showConfirmPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/PytPotUsunPytEgzamin', {navLocation:'anExam'});
}
exports.getExam = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/PytPotUsunPytEgzamin', {navLocation:'anExam'});
}
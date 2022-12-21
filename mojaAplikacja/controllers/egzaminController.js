const ExamRepository = require('../repository/sequelize/ExamRepository');

exports.showEgzaminListaEgzaminow = (req, res, next) => {
    ExamRepository.getExams()
            .then(exams => {
                res.render('pagesLotnictwo/Egzamin/listaEgzaminow', {
                    exams: exams,
                    navLocation: 'exam'
                });
            });
}


exports.showEgzaminDodajEgzamin = (req, res, next) => {
    res.render('pagesLotnictwo/Egzamin/form', {
            exam: {},
            pageTitle: 'Nowy egzamin',

            formMode: 'createNew',
            btnLabel: 'Dodaj egzamin',
            formAction: '/Egzamin/add',
            navLocation: 'exam'
        });
}
exports.showExamDetails = (req, res, next) => {


    const examId = req.params.examId;
        ExamRepository.getExamById(examId)
            .then(exam =>{
                res.render('pagesLotnictwo/Egzamin/form', {
                    exam: exam,
                    pageTitle: 'Szczegóły egzaminu',
                    formMode: 'showDetails',
                    formAction: '',
                    navLocation: 'exam'
                });
            });
}
exports.showAddedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Egzamin/added', {navLocation:'exam'});
}
exports.showDeletedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Egzamin/deleted', {navLocation:'exam'});
}
exports.showEditedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Egzamin/edited', {navLocation:'exam'});
}
exports.showEditPage = (req, res, next) => {
    const examId = req.params.examId;

        ExamRepository.getExamById(examId)
            .then(exam => {
                console.log('examController: ' + exam);
                res.render('pagesLotnictwo/Egzamin/form',{
                    exam: exam,
                    pageTitle: 'Edycja egzaminu',
                    formMode: 'edit',
                    btnLabel: 'Edytuj egzamin',
                    formAction: './',
                    navLocation: 'exam'
                   });
            });
}
exports.showConfirmPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Egzamin/PytaniePotwierdzenieUsuniecia', {navLocation:'exam'});
}

exports.addExam = (req, res, next) => {
    const examData = { ...req.body };
    console.log('CON: ' + examData);
    ExamRepository.createExam(examData)
        .then( result => {
            res.redirect('../../Egzamin/added');
        });
}


exports.updateExam = (req, res, next) => {
    const examId = req.body._id;
    const examData = { ...req.body };
    console.log('id: ' + examId + ', data: ' + examData);
    ExamRepository.updateExam(examId, examData)
        .then( result => {
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            res.redirect('../../Egzamin/edited');
        });
}

exports.deleteExam = (req, res, next) => {
    const examId = req.params.examId;
    ExamRepository.deleteExam(examId)
        .then( () => {
            res.redirect('../../Egzamin/deleted')
        });
}



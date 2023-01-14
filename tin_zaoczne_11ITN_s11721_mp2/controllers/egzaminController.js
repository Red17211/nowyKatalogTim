const ExamRepository = require('../repository/sequelize/ExamRepository');
// wyświetlanie danego widoku będzie potrzebna definicja funkcji, ma 3 parametry, obiekt reprezentujący żądanie klienta, odpowiedź http i opcjonalny parametr pozwalający odwołać się do następnego obiektu
exports.showEgzaminListaEgzaminow = (req, res, next) => {
    ExamRepository.getExams()
            .then(exams => {
                res.render('pagesLotnictwo/Egzamin/listaEgzaminow', { //wygeneruje widok na podstawie wybranego szablonu
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
            navLocation: 'exam',
            validationErrors: []
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
                    navLocation: 'exam',
                    validationErrors: []
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
                    btnLabel: 'Zapisz',
                    formAction: './',
                    navLocation: 'exam',
                    validationErrors: []
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
        })
        .catch(err => {
            err.errors.forEach(e => {
                console.log("e.path: " + e.path + ", e.type: " + e.type);
                if(e.path.includes('subject') && e.type == 'unique violation') {
                    e.message = "Egzamin z podanego przedmiotu już istnieje";
                }
            })
            res.render('pagesLotnictwo/Egzamin/form', {
                exam: examData,
                pageTitle: 'Nowy egzamin',
                formMode: 'createNew',
                btnLabel: 'Dodaj Egzamin',
                formAction: '/Egzamin/add',
                navLocation: 'exam',
                validationErrors: err.errors
            });
        });
}


exports.updateExam = (req, res, next) => {
    const examId = req.body._id;


   const examData = { ...req.body };
       console.log('CON: ' + examData);
       ExamRepository.updateExam(examId, examData)
           .then( result => {
                res.redirect('../../Egzamin/edited');
           })
           .catch(err => {
               err.errors.forEach(e => {
                   console.log("e.path: " + e.path + ", e.type: " + e.type);
                   if(e.path.includes('subject') && e.type == 'unique violation') {
                       e.message = "Egzamin z podanego przedmiotu już istnieje";
                   }
               })
               res.render('pagesLotnictwo/Egzamin/form', {
                   exam: examData,
                   pageTitle: 'Edycja egzaminu',
                   formMode: 'edit',
                   btnLabel: 'Zapisz',
                   formAction: '/Egzamin/edit',
                   navLocation: 'exam',
                   validationErrors: err.errors
               });
           });
}

exports.deleteExam = (req, res, next) => {
    const examId = req.params.examId;
    ExamRepository.deleteExam(examId)
        .then( () => {
            res.redirect('../../Egzamin/deleted')
        });
}



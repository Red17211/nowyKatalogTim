const QuestionRepository = require('../repository/sequelize/QuestionRepository');

exports.showListaPytaniePytanie = (req, res, next) => {
QuestionRepository.getQuestions()
            .then(questions => {
                res.render('pagesLotnictwo/Pytanie/listaPytan', {
                    questions: questions,
                    navLocation: 'question'
                });
            });
}

exports.showEgzaminDodajPytanie = (req, res, next) => {


     res.render('pagesLotnictwo/Pytanie/dodajPytanie', {
                question: {},
                pageTitle: 'Nowe pytanie',

                formMode: 'createNew',
                btnLabel: 'Dodaj pytanie',
                formAction: '/Pytanie/add',
                navLocation: 'question'
            });
}
exports.showQuestionDetails = (req, res, next) => {
    const questionId = req.params.questionId;
            QuestionRepository.getQuestionById(questionId)
                .then(question =>{
                    res.render('pagesLotnictwo/Pytanie/form', {
                        question: question,
                        pageTitle: 'Szczegóły pytania',
                        formMode: 'showDetails',
                        formAction: '',
                        navLocation: 'question',
                    });
                });
}

exports.showEditedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie/editedPytanieKom', {navLocation:'question'});
}
exports.showAddedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie/addedKom', {navLocation:'question'});
}
exports.showDeletedConfirmation = (req, res, next) => {
    res.render('pagesLotnictwo/Pytanie/deletedKom', {navLocation:'question'});
}
exports.showEditPage = (req, res, next) => {
    const questionId = req.params.questionId;

            QuestionRepository.getQuestionById(questionId)
                .then(question => {
                    console.log('questionController: ' + question);
                    res.render('pagesLotnictwo/Pytanie/form',{
                        question: question,
                        pageTitle: 'Edycja pytania',
                        formMode: 'edit',
                        btnLabel: 'Edytuj pytanie',
                        formAction: './',
                        navLocation: 'question'
                       });
                });
}

exports.addQuestion = (req, res, next) => {
    const questionData = { ...req.body };
    console.log('CONs: ' + questionData);
    QuestionRepository.createQuestion(questionData)
        .then( result => {
            res.redirect('../../Pytanie/addedKom');
        });
}


exports.updateQuestion = (req, res, next) => {
    const questionId = req.body._id;
    const questionData = { ...req.body };
    console.log('id: ' + questionId + ', data: ' + questionData);
    QuestionRepository.updateQuestion(questionId, questionData)
        .then( result => {
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            res.redirect('../../Pytanie/editedPytanieKom');
        });
}

exports.deleteQuestion = (req, res, next) => {
    const questionId = req.params.questionId;
    QuestionRepository.deleteQuestion(questionId)
        .then( () => {
            res.redirect('../../Pytanie/deletedKom')
        });
}



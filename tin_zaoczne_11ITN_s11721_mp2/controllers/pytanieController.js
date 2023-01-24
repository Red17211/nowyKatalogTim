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


     res.render('pagesLotnictwo/Pytanie/form', {
                question: {},
                pageTitle: req.__('question.form.add.pageTitle'),
                formMode: 'createNew',
                btnLabel: req.__('form.actions.add'),
                formAction: '/Pytanie/add',
                navLocation: 'question',
                validationErrors: []
            });
}
exports.showQuestionDetails = (req, res, next) => {

    const questionId = req.params.questionId;
            QuestionRepository.getQuestionById(questionId)
                .then(question =>{
                    res.render('pagesLotnictwo/Pytanie/form', {
                        question: question,
                        pageTitle: req.__('exam.form.details.pageTitle'),
                        formMode: 'showDetails',
                        formAction: '',
                        navLocation: 'question',
                        validationErrors: []
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
                        pageTitle: req.__('question.form.edit.pageTitle'),
                        formMode: 'edit',
                        btnLabel: req.__('form.actions.save'),
                        formAction: './',
                        navLocation: 'question',
                        validationErrors: []
                       });
                });
}

exports.addQuestion = (req, res, next) => {
    const questionData = { ...req.body };
    console.log('CONs: ' + questionData);
    QuestionRepository.createQuestion(questionData)
        .then( result => {
            res.redirect('../../Pytanie/addedKom');
        })
        .catch(err => {
            err.errors.forEach(e => {
                console.log("e.path: " + e.path + ", e.type: " + e.type);
                if(e.path.includes('PRIMARY') && e.type == 'unique violation') {
                    e.message = "Podany pesel już istnieje";
                    }
            })
            res.render('pagesLotnictwo/Pytanie/form', {
                question: questionData,
                pageTitle: req.__('question.form.add.pageTitle'),
                formMode: 'createNew',
                btnLabel: req.__('form.actions.add'),
                formAction: '/Pytanie/add',
                navLocation: 'question',
                validationErrors: err.errors
            });
        });
}


exports.updateQuestion = (req, res, next) => {
    const questionId = req.body._id;

    const questionData = { ...req.body };
        console.log('CONs: ' + questionData);
        QuestionRepository.updateQuestion(questionId, questionData)
            .then( result => {
                res.redirect('../../Pytanie/editedPytanieKom');
            })
            .catch(err => {
                err.errors.forEach(e => {
                    console.log("e.path: " + e.path + ", e.type: " + e.type);
                    if(e.path.includes('PRIMARY') && e.type == 'unique violation') {
                        e.message = "Podany pesel już istnieje";
                        }
                })
                res.render('pagesLotnictwo/Pytanie/form', {
                    question: questionData,
                    pageTitle: req.__('question.form.edit.pageTitle'),
                    formMode: 'createNew',
                    btnLabel: req.__('form.actions.save'),
                    formAction: '/Pytanie/add',
                    navLocation: 'question',
                    validationErrors: err.errors
                });
            });
}

exports.deleteQuestion = (req, res, next) => {
    const questionId = req.params.questionId;
    QuestionRepository.deleteQuestion(questionId)
        .then( () => {
            res.redirect('../../Pytanie/deletedKom')
        });
}



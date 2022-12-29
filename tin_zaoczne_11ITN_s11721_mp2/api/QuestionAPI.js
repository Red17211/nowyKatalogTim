const QuestionRepository = require('../repository/sequelize/QuestionRepository');

exports.getQuestions = (req, res, next) => {
    QuestionRepository.getQuestions()
        .then(questions => {
            res.status(200).json(questions);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getQuestionById = (req, res, next) => {
    const questionId = req.params.questionId;

    QuestionRepository.getQuestionById(questionId)
        .then(question => {
            if(!question){
                res.status(404).json({
                    message: 'Question with id: ' + questionId + ' not found'
                });
            }
            else{
                res.status(200).json(question);
            }
        });
};

exports.createQuestion = (req, res, next) => {
    QuestionRepository.createQuestion(req.body)
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

exports.updateQuestion = (req, res, next) => {
const questionId = req.params.questionId;
    QuestionRepository.updateQuestion(questionId, req.body)
        .then(result => {
            res.status(200).json({message: 'Question updated!', question: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
exports.deleteQuestion = (req, res, next) => {
const questionId = req.params.questionId;
    QuestionRepository.deleteQuestion(questionId)
        .then(result => {
            res.status(200).json({message: 'Question removed!', question: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
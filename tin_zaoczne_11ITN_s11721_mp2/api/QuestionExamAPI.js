const QuestionExamRepository = require('../repository/sequelize/QuestionExamRepository');

exports.getQuestionExams = (req, res, next) => {
    QuestionExamRepository.getQuestionExams()
        .then(questionExams => {
            res.status(200).json(questionExams);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getQuestionExamById = (req, res, next) => {
    const questionExamId = req.params.questionExamId;
    QuestionExamRepository.getQuestionExamById(questionExamId)
        .then(questionExam => {
            if(!questionExam){
                res.status(404).json({
                    message: 'QuestionExam with id: ' + questionExamId + ' not found'
                });
            }
            else{
                res.status(200).json(questionExam);
            }
        });
};

exports.createQuestionExam = (req, res, next) => {
    QuestionExamRepository.createQuestionExam(req.body)
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


exports.updateQuestionExam = (req, res, next) => {
const questionExamId = req.params.questionExamId;
    QuestionExamRepository.updateQuestion(questionExamId, req.body)
        .then(result => {
            res.status(200).json({message: 'QuestionExam updated!', questionExam: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
exports.deleteQuestionExam = (req, res, next) => {
const questionExamId = req.params.questionExamId;
    QuestionExamRepository.deleteQuestionExam(questionExamId)
        .then(result => {
            res.status(200).json({message: 'QuestionExam removed!', questionExam: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
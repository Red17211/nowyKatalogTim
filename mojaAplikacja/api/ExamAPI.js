const ExamRepository = require('../repository/sequelize/ExamRepository');

exports.getExams = (req, res, next) => {
    ExamRepository.getExams()
        .then(exams => {
            res.status(200).json(exams);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getExamById = (req, res, next) => {
    const examId = req.params.examId;
    ExamRepository.getExamById(examId)
        .then(exam => {
            if(!exam){
                res.status(404).json({
                    message: 'Exam with id: ' + examId + ' not found'
                });
            }
            else{
                res.status(200).json(exam);
            }
        });
};

exports.createExam = (req, res, next) => {
    ExamRepository.createExam(req.body)
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

exports.updateExam = (req, res, next) => {
const examId = req.params.examId;
    ExamRepository.updateExam(examId, req.body)
        .then(result => {
            res.status(200).json({message: 'Exam updated!', exam: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
exports.deleteExam = (req, res, next) => {
const examId = req.params.examId;
    ExamRepository.deleteExam(examId)
        .then(result => {
            res.status(200).json({message: 'Exam removed!', exam: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
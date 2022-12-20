const Exam = require("../../model/sequelize/Exam");


exports.getExams = () => {
    return Exam.findAll();
};

exports.getExamById = (examId) => {
    return Exam.findByPk(examId);
};

exports.createExam = (newExamData) => {
    return Exam.create({
        subject: newExamData.subject,
        startTime: newExamData.startTime,
        endTime: newExamData.endTime,
        points: newExamData.points
    });
};

exports.updateExam = (examId, examData) => {
    const subject = examData.subject;
    const startTime = examData.startTime;
    const endTime = examData.endTime;
    return Exam.update(examData, {where: {_id: examId}});
};

exports.deleteExam = (examId) => {
    return Exam.destroy({
       where: { _id: examId }
    });
};



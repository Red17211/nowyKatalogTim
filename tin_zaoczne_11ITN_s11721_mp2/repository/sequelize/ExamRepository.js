const Exam = require("../../model/sequelize/Exam");


exports.getExams = () => {
    return Exam.findAll();
};

exports.getExamBySubject = (sub) => {

    let exam;

    let result = Exam.findAll()
        .then(exams =>{

            for(let exam of exams ){
                console.log("Joszka: " + exam.subject);
                if(exam.subject == sub){
                    return exam;
                }

            }
        })
    ;

    return result;
};

exports.getExamById = (examId) => {
    return Exam.findByPk(examId);
};

exports.createExam = (newExamData) => {
    return Exam.create({
        examDate: newExamData.examDate,
        subject: newExamData.subject,
        startTime: newExamData.startTime,
        endTime: newExamData.endTime,
        points: newExamData.points
    });
};

exports.updateExam = (examId, examData) => {
    const examDate = examData.examDate;
    const subject = examData.subject;
    const startTime = examData.startTime;
    const endTime = examData.endTime;
    const points = examData.points;
    return Exam.update(examData, {where: {_id: examId}});
};

exports.deleteExam = (examId) => {
    return Exam.destroy({
       where: { _id: examId }
    });
};



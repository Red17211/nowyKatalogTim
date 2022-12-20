const sequelize = require('./sequelize');

const Person = require('../../model/sequelize/Person');
const Question = require('../../model/sequelize/Question');
const Exam = require('../../model/sequelize/Exam');
const Question_Exam = require('../../model/sequelize/Question_Exam');

module.exports = () => {

    Person.hasMany(Question_Exam, {as: 'answeredQuestions', foreignKey: {name: 'candidatePesel', allowNull: false}});
    Question.hasMany(Question_Exam, {as: 'answeredQuestions', foreignKey: {name: 'questionId', allowNull: false}});
    Exam.hasMany(Question_Exam, {as: 'answeredQuestions', foreignKey: {name: 'examId', allowNull: false}});

    let allPersons;
    let allQuestions;
    let allExams;
    let allQuestionExams;

    return sequelize
        .sync({force: true})

        .then( () => {
            let list = Person.findAll();
            console.log('JOOOOO ' + list);
            return list;
        })
        .then(persons => {
            if( !persons || persons.length == 0 ) {
                return Person.bulkCreate([
                    {pesel: 88022708956, firstName: 'Jan', lastName: 'Kowalski', permissionCode: 1},
                    {pesel: 134564569846, firstName: 'Adam', lastName: 'Pawlak', permissionCode: 1},
                    {pesel: 847548518418, firstName: 'Krzysztof', lastName: 'Sedziszewski', permissionCode: 1}
                ])
                .then( () => {
                    return Person.findAll();
                });
            }
            else{
                return persons;
            }
        })
///////////////////////////////////////////////////////////////////////////////////////
        .then( questions => {
                    allQuestions = questions;
                    return Question.findAll();
                })
        .then(questions => {
            if( !questions || questions.length == 0 ) {
                return Question.bulkCreate([
                    {question: 'Co ma ala?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Nawigacja'},
                    {question: 'Co ma ala?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Nawigacja'}
                ])
                .then( () => {
                    return Question.findAll();
                });
            }
            else{
                return questions;
            }
        })
//        .then( questions => {
//            allQuestions = questions;
//            return Question.findAll();
//        })

       .then( exams => {
            allExams = exams;
            return Exam.findAll();
        })
        .then(exams => {
            if( !exams || exams.length == 0 ) {

                return Exam.bulkCreate([
                    {examDate: '2022-12-12', subject: 'Nawigacja', startTime: '15:00', endTime: '17:00', points: 10},
                    {examDate: '2022-12-12', subject: 'Fizyka', startTime: '16:00', endTime: '17:30', points: 15},
                    {examDate: '2022-12-14', subject: 'Fizyka', startTime: '16:00', endTime: '17:30', points: 15}
                ])
                .then( () => {
                    return Exam.findAll();
                });
            }
            else{
                return exams;
            }
        })



            .then( questionExams => {
                    allQuestionExams = questionExams;
                    return Question_Exam.findAll();
                })
            .then(questionExams => {
                if( !questionExams || questionExams.length == 0 ) {
                console.log('SIEMAasd: ' + allQuestions[0]._id);
                    return Question_Exam.bulkCreate([

                        {examId: 1, questionId: 1, answer: 1, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 2, questionId: 2, answer: 3, answerTime: '15:36', candidatePesel: 88022708956}
                    ])
                    .then( () => {
                        return Question_Exam.findAll();
                    });
                }
                else{
                console.log('SIEMA2: ' + allQuestions[0]._id);
                    return questionExams;
                }
            })

        ;
}
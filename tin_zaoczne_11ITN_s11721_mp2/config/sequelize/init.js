const sequelize = require('./sequelize');

const Person = require('../../model/sequelize/Person');
const Question = require('../../model/sequelize/Question');
const Exam = require('../../model/sequelize/Exam');
const Question_Exam = require('../../model/sequelize/Question_Exam');

module.exports = () => {

    Person.hasMany(Question_Exam, {as: 'answers', foreignKey: {name: 'candidatePesel', allowNull: false}});
    Question.hasMany(Question_Exam, {as: 'answeredQuestions', foreignKey: {name: 'questionId', allowNull: false}});
    Exam.hasMany(Question_Exam, {as: 'answers2', foreignKey: {name: 'examId', allowNull: false}});


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
                        {pesel: 13456456984, firstName: 'Adam', lastName: 'Pawlak', permissionCode: 1},
                        {pesel: 84754851841, firstName: 'Krzysztof', lastName: 'Sedziszewski', permissionCode: 1}
                    ])
                    .then( () => {
                        return Person.findAll();
                    });
                }
                else{
                    return persons;
                }
            })
        .then( questions => {
                    allQuestions = questions;
                    return Question.findAll();
                })
        .then(questions => {
            if( !questions || questions.length == 0 ) {
                return Question.bulkCreate([
                    {question: 'Co to jest kompas?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Nawigacja'},
                    {question: 'Ile km to jedna mila?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Nawigacja'},
                    {question: 'Co to jest równik?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Nawigacja'},
                    {question: 'Ile średnio wytrzyma człowiek pod wodą?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Nawigacja'},
                    {question: 'Co to jest lotka w samolocie?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Nawigacja'},
                    {question: 'Do czego służy statecznik poziomy?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Człowiek'},
                    {question: 'Co to jest hipotermia?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Człowiek'},
                    {question: 'Do czego służy siłownik podwozia?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Człowiek'},
                    {question: 'Jak nazywa się jednostka odległości w lotnictwie?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Człowiek'},
                    {question: 'Ile egzaminów trzeba zaliczyć do licencji CPL?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Człowiek'},
                    {question: 'Kto powołuję komisje ds. badania wypadków lotniczych', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Prawo'},
                    {question: 'Kto wydaje licencje załogi lotniczej?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Prawo'},
                    {question: 'Ile lat jest ważne ipranienie ME?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Prawo'},
                    {question: 'Co to jest IR?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Prawo'},
                    {question: 'Co to jest VFR?', answer1: 'Kota', answer2: 'Psa', answer3: 'Kreta', correctAnswer: 'Nic nie ma', subject: 'Prawo'}
                ])
                .then( () => {
                    return Question.findAll();
                });
            }
            else{
                return questions;
            }
        })
       .then( () => {
            let list = Exam.findAll();
            return list;
        })
        .then(exams => {
            if( !exams || exams.length == 0 ) {
                return Exam.bulkCreate([
                    {examDate: '12.12.2022', subject: 'Nawigacja', startTime: '15:00', endTime: '17:00', points: 10},
                    {examDate: '2022-12-12', subject: 'Człowiek', startTime: '16:00', endTime: '17:30', points: 15},
                    {examDate: '2022-12-14', subject: 'Prawo', startTime: '16:00', endTime: '17:30', points: 15}
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
                    return Question_Exam.bulkCreate([

                        {examId: 1, questionId: 1, answer: 1, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 2, questionId: 2, answer: 3, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 1, questionId: 3, answer: 4, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 2, questionId: 4, answer: 4, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 1, questionId: 5, answer: 1, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 2, questionId: 6, answer: 4, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 1, questionId: 7, answer: 1, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 2, questionId: 8, answer: 4, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 1, questionId: 9, answer: 1, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 2, questionId: 10, answer: 3, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 1, questionId: 11, answer: 1, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 2, questionId: 12, answer: 3, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 1, questionId: 13, answer: 1, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 2, questionId: 14, answer: 3, answerTime: '15:36', candidatePesel: 88022708956},
                        {examId: 1, questionId: 15, answer: 1, answerTime: '15:36', candidatePesel: 88022708956}
                    ])
                    .then( () => {
                        return Question_Exam.findAll();
                    });
                }
                else{
                    return questionExams;
                }
            })


        ;
}
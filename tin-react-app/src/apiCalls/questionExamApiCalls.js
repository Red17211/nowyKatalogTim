import { questionExamList, questionExamDetailsList } from './questionExamApiMockData'

export function getQuestionExamApiCall() {
    return questionExamList;
}

export function getQuestionExamByIdApiCall(questionExamId) {
    const questionExam = questionExamDetailsList.find(questionExam => questionExam._id === questionExamId)
    return questionExam;
}

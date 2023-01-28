import { questionList, questionDetailsList } from './questionApiMockData'

export function getQuestionApiCall() {
    return questionList;
}

export function getQuestionByIdApiCall(questionId) {
    const question = questionDetailsList.find(question => question._id === questionId)
    return question;
}
import { examList, examDetailsList } from './examApiMockData'

export function getExamApiCall() {
    return examList;
}

export function getExamByIdApiCall(examId) {
    const exam = examDetailsList.find(exam => exam._id === examId)
    return exam;
}
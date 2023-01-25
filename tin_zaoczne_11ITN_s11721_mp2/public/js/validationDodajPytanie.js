function validateForm() {

    const contentsInput = document.getElementById('question');
    const response1Input = document.getElementById('answer1');
    const response2Input = document.getElementById('answer2');
    const response3Input = document.getElementById('answer3');
    const correctAnswerInput = document.getElementById('correctAnswer');
    const subjectInput = document.getElementById('subject');

    const errorContents = document.getElementById('cont');
    const errorResponse1 = document.getElementById('errorResponse1');
    const errorResponse2 = document.getElementById('errorResponse2');
    const errorResponse3 = document.getElementById('errorResponse3');
    const errorCorrectAnswer = document.getElementById('errorCorrectAnswer');
    const errorSubject = document.getElementById('errorSubject');
    
    const allForm = document.getElementById('allForm');

    resetErrors (
        [contentsInput, response1Input, response2Input, response3Input, correctAnswerInput, subjectInput]
        , [errorContents,errorResponse1, errorResponse2, errorResponse3, errorCorrectAnswer, errorSubject], allForm);

    let valid = true;

    const contentsMessage = document.getElementById('contents-required').innerText;
    const response1Message = document.getElementById('response1-required').innerText;
    const response2Message = document.getElementById('response2-required').innerText;
    const response3Message = document.getElementById('response3-required').innerText;
    const correctAnswerMessage = document.getElementById('correctAnswer-required').innerText;
    const subjectMessage = document.getElementById('subject-required').innerText;

    const contentsLengthMessage = document.getElementById('Lcontents-required').innerText;
    const response1LengthMessage = document.getElementById('Lresponse1-required').innerText;
    const response2LengthMessage = document.getElementById('Lresponse2-required').innerText;
    const response3LengthMessage = document.getElementById('Lresponse3-required').innerText;
    const correctAnswerLengthMessage = document.getElementById('LcorrectAnswer-required').innerText;
    const subjectLengthMessage = document.getElementById('Lsubject-required').innerText;

   const generalMessage = document.getElementById('general-required').innerText;

    if (!checkRequired(contentsInput.value)) {
        
        valid = false;
        contentsInput.classList.add("error-input");
        errorContents.innerText = "Pole jest wymagane";
        errorContents.style.display="block";
        errorContents.classList.add("Errors");
        errorContents.innerText = contentsMessage;
   
    } else if (!checkTextLengthRange(contentsInput.value, 5, 60)) {

        valid = false;
        contentsInput.className = "error-input";
        errorContents.innerText = "Pole powinno zwiarać 5 do 60 znakow";
        errorContents.style.display="block";
        errorContents.classList.add("Errors");
        errorContents.innerText = contentsLengthMessage;
    }
    else{
        errorContents.innerText = "";
    }
    
    if (!checkRequired(response1Input.value)) {
        valid = false;
        response1Input.classList.add("error-input");
        errorResponse1.innerText = "Pole jest wymagane";
        errorResponse1.style.display="block";
        errorResponse1.classList.add("Errors");
        errorResponse1.innerText = response1Message;
    } else if (!checkTextLengthRange(response1Input.value, 3, 60)) {
        valid = false;
        response1Input.classList.add("error-input");
        errorResponse1.innerText = "Pole powinno zwiarać od 3 do 60 znaków";
        errorResponse1.style.display="block";
        errorResponse1.classList.add("Errors");
        errorResponse1.innerText = response1LengthMessage;
    }

    if (!checkRequired(response2Input.value)) {
        valid = false;
        response2Input.classList.add("error-input");
        errorResponse2.innerText = "Pole jest wymagane";
        errorResponse2.style.display="block";
        errorResponse2.classList.add("Errors");
        errorResponse2.innerText = response2Message;
    } else if (!checkTextLengthRange(response2Input.value, 3, 60)) {
        valid = false;
        response2Input.classList.add("error-input");
        errorResponse2.innerText = "Pole powinno zwiarać od 3 do 60 znaków";
        errorResponse2.style.display="block";
        errorResponse2.classList.add("Errors");
        errorResponse2.innerText = response2LengthMessage;
    }

    if (!checkRequired(response3Input.value)) {
        valid = false;
        response3Input.classList.add("error-input");
        errorResponse3.innerText = "Pole jest wymagane";
        errorResponse3.style.display="block";
        errorResponse3.classList.add("Errors");
        errorResponse3.innerText = response3Message;
    } else if (!checkTextLengthRange(response3Input.value, 3, 60)) {
        valid = false;
        response3Input.classList.add("error-input");
        errorResponse3.innerText = "Pole powinno zwiarać od 3 do 60 znaków";
        errorResponse3.style.display="block";
        errorResponse3.classList.add("Errors");
        errorResponse3.innerText = response3LengthMessage;
    }
    
    if (!checkRequired(correctAnswerInput.value)) {
        valid = false;
        correctAnswerInput.classList.add("error-input");
        errorCorrectAnswer.innerText = "Pole jest wymagane";
        errorCorrectAnswer.style.display="block";
        errorCorrectAnswer.classList.add("Errors");
        errorCorrectAnswer.innerText = correctAnswerMessage;
    } else if (!checkTextLengthRange(correctAnswerInput.value, 3, 60)) {
        valid = false;
        correctAnswerInput.classList.add("error-input");
        errorCorrectAnswer.innerText = "Pole powinno zwiarać od 3 do 60 znaków";
        errorCorrectAnswer.style.display="block";
        errorCorrectAnswer.classList.add("Errors");
        errorCorrectAnswer.innerText = correctAnswerLengthMessage;
    }
    
    if (!checkRequired(subjectInput.value)) {
        valid = false;
        subjectInput.classList.add("error-input");
        errorSubject.innerText = "Pole jest wymagane";
        errorSubject.style.display="block";
        errorSubject.classList.add("Errors");
        errorSubject.innerText = subjectMessage;
    } else if (!checkTextLengthRange(subjectInput.value, 3, 60)) {
        valid = false;
        subjectInput.classList.add("error-input");
        errorSubject.innerText = "Pole powinno zwiarać od 3 do 60 znaków";
        errorSubject.style.display="block";
        errorSubject.classList.add("Errors");
        errorSubject.innerText = subjectLengthMessage;
    }
    
    if (!valid) {
        allForm.classList.add("Errors");
        allForm.innerText = "Formularz zawiera błędy";
        allForm.innerText = generalMessage;
    }
    
    return valid;

}

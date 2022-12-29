function validateForm() {

    const contentsInput = document.getElementById('contents');
    const response1Input = document.getElementById('response1');
    const response2Input = document.getElementById('response2');
    const response3Input = document.getElementById('response3');
    const correctAnswerInput = document.getElementById('correctAnswer');
    const itemInput = document.getElementById('item');

    const errorContents = document.getElementById('cont');
    const errorResponse1 = document.getElementById('errorResponse1');
    const errorResponse2 = document.getElementById('errorResponse2');
    const errorResponse3 = document.getElementById('errorResponse3');
    const errorCorrectAnswer = document.getElementById('errorCorrectAnswer');
    const errorItem = document.getElementById('errorItem');
    
    

    resetErrors (
        [contentsInput, response1Input, response2Input, response3Input, correctAnswerInput, itemInput]
        , [errorContents,errorResponse1, errorResponse2, errorResponse3, errorCorrectAnswer, errorItem], allForm);

    let valid = true;

  
    if (!checkRequired(contentsInput.value)) {
        
        valid = false;
        contentsInput.classList.add("error-input");
        errorContents.innerText = "Pole jest wymagane";
        errorContents.style.display="block";
        errorContents.classList.add("Errors");
 
   
    } else if (!checkTextLengthRange(contentsInput.value, 5, 60)) {

        valid = false;
        contentsInput.className = "error-input";
        errorContents.innerText = "Pole powinno zwiarać 5 do 60 znakow";
        errorContents.style.display="block";
        errorContents.classList.add("Errors");
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
    } else if (!checkTextLengthRange(response1Input.value, 3, 60)) {
        valid = false;
        response1Input.classList.add("error-input");
        errorResponse1.innerText = "Pole powinno zwiarać od 3 do 60 znaków";
        errorResponse1.style.display="block";
        errorResponse1.classList.add("Errors");
    }

    if (!checkRequired(response2Input.value)) {
        valid = false;
        response2Input.classList.add("error-input");
        errorResponse2.innerText = "Pole jest wymagane";
        errorResponse2.style.display="block";
        errorResponse2.classList.add("Errors");
    } else if (!checkTextLengthRange(response2Input.value, 3, 60)) {
        valid = false;
        response2Input.classList.add("error-input");
        errorResponse2.innerText = "Pole powinno zwiarać od 3 do 60 znaków";
        errorResponse2.style.display="block";
        errorResponse2.classList.add("Errors");
    }

    if (!checkRequired(response3Input.value)) {
        valid = false;
        response3Input.classList.add("error-input");
        errorResponse3.innerText = "Pole jest wymagane";
        errorResponse3.style.display="block";
        errorResponse3.classList.add("Errors");
    } else if (!checkTextLengthRange(response3Input.value, 3, 60)) {
        valid = false;
        response3Input.classList.add("error-input");
        errorResponse3.innerText = "Pole powinno zwiarać od 3 do 60 znaków";
        errorResponse3.style.display="block";
        errorResponse3.classList.add("Errors");
    }
    
    if (!checkRequired(correctAnswerInput.value)) {
        valid = false;
        correctAnswerInput.classList.add("error-input");
        errorCorrectAnswer.innerText = "Pole jest wymagane";
        errorCorrectAnswer.style.display="block";
        errorCorrectAnswer.classList.add("Errors");
    } else if (!checkTextLengthRange(correctAnswerInput.value, 1, 60)) {
        valid = false;
        correctAnswerInput.classList.add("error-input");
        errorCorrectAnswer.innerText = "Pole powinno zwiarać od 3 do 60 znaków";
        errorCorrectAnswer.style.display="block";
        errorCorrectAnswer.classList.add("Errors");
    }
    
    if (!checkRequired(itemInput.value)) {
        valid = false;
        itemInput.classList.add("error-input");
        errorItem.innerText = "Pole jest wymagane";
        errorItem.style.display="block";
        errorItem.classList.add("Errors");
    } else if (!checkTextLengthRange(itemInput.value, 3, 60)) {
        valid = false;
        itemInput.classList.add("error-input");
        errorItem.innerText = "Pole powinno zwiarać od 3 do 60 znaków";
        errorItem.style.display="block";
        errorItem.classList.add("Errors");
    }
    
    if (!valid) {
        errorSummary.classList.add("Errors");
        errorSummary.innerText = "Formularz zawiera błędy";
    }
    
    return valid;

}

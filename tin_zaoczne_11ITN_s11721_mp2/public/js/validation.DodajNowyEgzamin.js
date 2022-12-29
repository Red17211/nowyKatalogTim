function validateForm() {
    
    const myDateInput = document.getElementById('examDate');
    const itemInput = document.getElementById('subject');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const pointsInput = document.getElementById('points');

    const errorMyDate = document.getElementById('errorMyDate');
    const errorItem = document.getElementById('errorItem');
    const errorStartTime = document.getElementById('errorStartTime');
    const errorPoints = document.getElementById('errorPoints');

    const errorSummary = document.getElementById('allForm2');
    
    
    resetErrors ([
    myDateInput,
    itemInput,
    startTimeInput,
    endTimeInput,
    pointsInput],
        [errorMyDate, errorItem, errorStartTime, errorPoints], errorSummary);
    
    let valid = true;
    
    if (!checkRequired(myDateInput.value)) {
        valid = false;
        myDateInput.classList.add("error-input");
        errorMyDate.innerText = "Wymagany format to dd/mm/rrrr";
        errorMyDate.style.display="block";
        errorMyDate.classList.add("Errors");
    } else if (!validateHhMm(startTimeInput)) {
        valid = false;
        myDateInput.classList.add("error-input");
        errorMyDate.innerText = "Wymagany format to dd/mm/rrrr";
        errorMyDate.style.display="block";
        errorMyDate.classList.add("Errors");
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
        errorItem.innerText = "Pole powinno zwiarać od 3 do 60";
        errorItem.style.display="block";
        errorItem.classList.add("Errors");
    }
 
    if (!checkRequired(startTimeInput.value)) {
        valid = false;
        startTimeInput.classList.add("error-input");
        errorStartTime.innerText = "Pole jest wymagane";
        errorStartTime.style.display="block";
        errorStartTime.classList.add("Errors");
    } else if (!checkTextLengthRange(startTimeInput.value, 5)) {
        valid = false;
        startTimeInput.classList.add("error-input");
        errorStartTime.innerText = "Pole powinno zwiarać 5 znaków";
        errorStartTime.style.display="block";
        errorStartTime.classList.add("Errors");
    }

    if (!checkRequired(pointsInput.value)) {
            valid = false;
            pointsInput.classList.add("error-input");
            errorPoints.innerText = "Pole jest wymagane";
            errorPoints.style.display="block";
            errorPoints.classList.add("Errors");
        } else if (!checkTextLengthRange(pointsInput.value, 1, 2)) {
            valid = false;
            pointsInput.classList.add("error-input");
            errorPoints.innerText = "Pole powinno zwiarać od 1 do 2 znakow";
            errorPoints.style.display="block";
            errorPoints.classList.add("Errors");
        }
    
    if (!valid) {
        errorSummary.innerText = "Formularz zawiera błędy";
        errorSummary.classList.add("Errors");
    }
    
    return valid;

}
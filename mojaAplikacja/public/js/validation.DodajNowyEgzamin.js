function validateForm() {
    
    const myDateInput = document.getElementById('myDate');
    const itemInput = document.getElementById('item');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const pointsInput = document.getElementById('points');

    const errorMyDate = document.getElementById('errorMyDate');
    const errorItem = document.getElementById('errorItem');
    const errorStartTime = document.getElementById('errorStartTime');


    const errorSummary = document.getElementById('allForm2');
    
    
    resetErrors ([myDateInput, itemInput, startTimeInput, endTimeInput,], 
        [errorMyDate, errorItem, errorStartTime], errorSummary);
    
    let valid = true;
    
    if (!checkRequired(myDateInput.value)) {
        valid = false;
        myDateInput.classList.add("error-input");
        errorMyDate.innerText = "Wymagany format to dd/mm/rrrr";
        errorMyDate.style.display="block";
        errorMyDate.classList.add("Errors");
    } else if (!checkTextLengthRange(myDateInput.value, 10,10)) {
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
    } else if (!checkTextLengthRange(startTimeInput.value, 1, 60)) {
        valid = false;
        startTimeInput.classList.add("error-input");
        errorStartTime.innerText = "Pole powinno zwiarać od 1 do 60";
        errorStartTime.style.display="block";
        errorStartTime.classList.add("Errors");
    }

    
    if (!valid) {
        errorSummary.innerText = "Formularz zawiera błędy";
        errorSummary.classList.add("Errors");
    }
    
    return valid;

}
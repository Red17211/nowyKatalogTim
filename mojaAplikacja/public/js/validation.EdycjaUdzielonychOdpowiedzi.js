function validateForm() {

    const responseInput = document.getElementById('response');
    const startTimeInput = document.getElementById('startTime');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const peselInput = document.getElementById('pesel');

    const errorResponse = document.getElementById('errorResponse');
    const errorStartTime = document.getElementById('errorStartTime');
    const errorPesel = document.getElementById('errorPesel');
    const errorName = document.getElementById('errorName');
    const errorSurname = document.getElementById('errorSurname');

    const errorSummary = document.getElementById('allForm2');

    resetErrors ([responseInput,startTimeInput, nameInput, surnameInput, peselInput], 
        [errorResponse,errorStartTime, errorName, errorSurname, errorPesel], errorSummary);

    let valid = true;

    //walidacja odpowiedzi

    if (!checkRequired(responseInput.value)) {

        valid = false;

        responseInput.classList.add("error-input");
        errorResponse.innerText = "Pole jest wymagane";
        errorResponse.style.display="block";
        errorResponse.classList.add("Errors");
    } else if (!checkTextLengthRange(responseInput.value, 1, 1)) {

        valid = false;
        responseInput.classList.add("error-input");
        errorResponse.innerText = "Pole powinno zwiarać 1 cyfrę";
        errorResponse.style.display="block";
        errorResponse.classList.add("Errors");
    }
        //walidacja start time
    if (!checkRequired(startTimeInput.value)) {

        valid = false;

        startTimeInput.classList.add("error-input");
        errorStartTime.innerText = "Pole jest wymagane";
        errorStartTime.style.display="block";
        errorStartTime.classList.add("Errors");
    } else if (!checkTextLengthRange(startTimeInput.value, 3, 60)) {

        valid = false;
        startTimeInput.classList.add("error-input");
        errorStartTime.innerText = "Pole powinno zwiarać od 3 do 60";
        errorStartTime.style.display="block";
        errorStartTime.classList.add("Errors");
    }

     //walidacja imienia

     if (!checkRequired(nameInput.value)) {

        valid = false;

        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
        errorName.style.display="block";
        errorName.classList.add("Errors");
    } else if (!checkTextLengthRange(nameInput.value, 3, 60)) {

        valid = false;

        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zwiarać od 3 do 60";
        errorName.style.display="block";
        errorName.classList.add("Errors");
    }
      //walidacja nazwiska

      if (!checkRequired(surnameInput.value)) {

        valid = false;

        surnameInput.classList.add("error-input");
        errorSurname.innerText = "Pole jest wymagane";
        errorSurname.style.display="block";
        errorSurname.classList.add("Errors");

    } else if (!checkTextLengthRange(surnameInput.value, 3, 60)) {

        valid = false;
        
        surnameInput.classList.add("error-input");
        errorSurname.innerText = "Pole powinno zwiarać od 3 do 60";
        errorSurname.style.display="block";
        errorSurname.classList.add("Errors");
    }


    // walidacja peselu

    if (!checkRequired(peselInput.value)) {

        valid = false;

        peselInput.classList.add("error-input");
        errorPesel.innerText = "Pole jest wymagane";
        errorPesel.style.display="block";
        errorPesel.classList.add("Errors");
    } else if (!checkTextLengthRange(peselInput.value, 11, 11)) {

        valid = false;
        peselInput.classList.add("error-input");
        errorPesel.innerText = "Pole powinno zwiarać 11 znaków";
        errorPesel.style.display="block";
        errorPesel.classList.add("Errors");
    }   

    if (!valid) {
        errorSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}s
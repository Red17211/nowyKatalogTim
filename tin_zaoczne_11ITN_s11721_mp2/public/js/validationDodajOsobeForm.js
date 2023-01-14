function validateForm() {

    const peselInput = document.getElementById('pesel');
    const nameInput = document.getElementById('firstName');
    const surnameInput = document.getElementById('lastName');
    const permissionCodeInput = document.getElementById('permissionCode');

    const errorPesel = document.getElementById('errorPesel');
    const errorName = document.getElementById('errorName');
    const errorSurname = document.getElementById('errorSurname');
    const errorPermissionCode = document.getElementById('errorPermissionCode');

    const errorSummary = document.getElementById('allForm2');

    resetErrors ([peselInput, nameInput, surnameInput, permissionCodeInput],
         [errorPesel, errorName, errorSurname, errorPermissionCode], 
        errorSummary);

    let valid = true;

    // walidacja peselu

    if (!checkRequired(peselInput.value)) {

        valid = false;

        peselInput.classList.add("error-input");
        errorPesel.innerText = "Pole jest wymagane-walidacja front";
        errorPesel.style.display="block";
        errorPesel.classList.add("Errors");
    } else if (!checkTextLengthRange(peselInput.value, 11, 11)) {

        valid = false;
        peselInput.classList.add("error-input");
        errorPesel.innerText = "Pole powinno zwiarać 11 znaków";
        errorPesel.style.display="block";
        errorPesel.classList.add("Errors");
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

    //walidacja kodu uprawnienia

    if (!checkRequired(permissionCodeInput.value)) {

        valid = false;

        permissionCodeInput.classList.add("error-input");
        errorPermissionCode.innerText = "Pole jest wymagane";
        errorPermissionCode.style.display="block";
        errorPermissionCode.classList.add("Errors");
    } else if (!checkTextLengthRange(permissionCodeInput.value, 1, 6)) {

        valid = false;
        permissionCodeInput.classList.add("error-input");
        errorPermissionCode.innerText = "Pole powinno zwiarać od 1 do 6";
        errorPermissionCode.style.display="block";
        errorPermissionCode.classList.add("Errors");
    }
    if (!valid) {
        errorSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;

}
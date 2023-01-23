function validateForm() {

    const peselInput = document.getElementById('pesel');
    const nameInput = document.getElementById('firstName');
    const surnameInput = document.getElementById('lastName');
    const permissionCodeInput = document.getElementById('permissionCode');
    const passwordInput = document.getElementById('password');

    const errorPesel = document.getElementById('LerrorPesel');
    const errorName = document.getElementById('LerrorName');
    const errorSurname = document.getElementById('LerrorSurname');
    const errorPermissionCode = document.getElementById('LerrorPermissionCode');
    const errorPassword = document.getElementById('LerrorPassword');

    const errorSummary = document.getElementById('allForm2');

    resetErrors ([peselInput, nameInput, surnameInput, permissionCodeInput],
         [errorPesel, errorName, errorSurname, errorPermissionCode], 
        errorSummary);

    let valid = true;

    // walidacja peselu

    const peselMessage = document.getElementById('pesel-required').innerText;
    const nameMessage = document.getElementById('name-required').innerText;
    const surnameMessage = document.getElementById('surname-required').innerText;
    const accessLevelMessage = document.getElementById('accessLevel-required').innerText;
    const passwordMessage = document.getElementById('password-required').innerText;

    const peselLengthMessage = document.getElementById('pesel-required').innerText;
    const nameLengthMessage = document.getElementById('name-required').innerText;
    const surnameLengthMessage = document.getElementById('surname-required').innerText;
    const accessLevelLengthMessage = document.getElementById('accessLevel-required').innerText;
    const passwordLengthMessage = document.getElementById('Lpassword-required').innerText;



    const generalMessage = document.getElementById('general-required').innerText;

    if (!checkRequired(peselInput.value)) {

        valid = false;
        peselInput.classList.add("error-input");
        errorPesel.style.display="block";
        errorPesel.classList.add("Errors");
        errorPesel.innerText = peselMessage;

    } else if (!checkTextLengthRange(peselInput.value, 11, 11)) {

        valid = false;
        peselInput.classList.add("error-input");
        errorPesel.style.display="block";
        errorPesel.classList.add("Errors");
        errorPesel.innerText = peselLengthMessage;
    }   

       //walidacja imienia

       if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.style.display="block";
        errorName.classList.add("Errors");
        errorName.innerText = nameMessage;
    } else if (!checkTextLengthRange(nameInput.value, 3, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zwiarać od 3 do 60";
        errorName.style.display="block";
        errorName.classList.add("Errors");
        errorName.innerText = nameLengthMessage;
    }
      //walidacja nazwiska

      if (!checkRequired(surnameInput.value)) {

        valid = false;

        errorSurname.innerText = "Pole jest wymagane";
        errorSurname.style.display="block";
        errorSurname.classList.add("Errors");
        errorSurname.innerText = surnameMessage;

    } else if (!checkTextLengthRange(surnameInput.value, 3, 60)) {

        valid = false;
        
        surnameInput.classList.add("error-input");
        //errorSurname.innerText = generalMessage;
        errorSurname.style.display="block";
        errorSurname.classList.add("Errors");
        errorSurname.innerText = surnameLengthMessage;
    }

    //walidacja hasla

          if (!checkRequired(passwordInput.value)) {

            valid = false;

            //errorPassword.innerText = "Pole jest wymagane";
            errorPassword.style.display="block";
            errorPassword.classList.add("Errors");
            errorPassword.innerText = passwordMessage;

        } else if (!checkTextLengthRange(passwordInput.value, 6, 100)) {

            valid = false;

            passwordInput.classList.add("error-input");
            //errorSurname.innerText = generalMessage;
            errorPassword.style.display="block";
            errorPassword.classList.add("Errors");
            errorPassword.innerText = passwordLengthMessage;
        }

    //walidacja kodu uprawnienia

    if (!checkRequired(permissionCodeInput.value)) {

        valid = false;

        permissionCodeInput.classList.add("error-input");
        errorPermissionCode.innerText = "Pole jest wymagane";
        errorPermissionCode.style.display="block";
        errorPermissionCode.classList.add("Errors");
        errorPermissionCode.innerText = accessLevelMessage;

    } else if (!checkTextLengthRange(permissionCodeInput.value, 1, 6)) {

        valid = false;
        permissionCodeInput.classList.add("error-input");
        errorPermissionCode.innerText = "Pole powinno zwiarać od 1 do 6";
        errorPermissionCode.style.display="block";
        errorPermissionCode.classList.add("Errors");
        errorPermissionCode.innerText = accessLevelLengthMessage;
    }
    if (!valid) {
        errorSummary.classList.add("error-input");
        errorSummary.style.display="block";
        errorSummary.innerText = generalMessage;
    }

    return valid;

}
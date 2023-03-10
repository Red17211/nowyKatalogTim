
function resetErrors(inputs, errorTexts, errorInfo) { //funkcja czyszczącą formatowanie błędnych pól oraz ich komunikatów

    for (let i=0; i<inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }

    for(let i=0; i<errorTexts.length; i++) {

        errorTexts[i].innerText = "";
    }
    
    errorInfo.innerText = "";

}

function validateHhMm(inputField) {
var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(inputField.value);

if (isValid) {
inputField.style.backgroundColor = '#bfa';
} else {
inputField.style.backgroundColor = '#fba';
    }

    return isValid;
  }

function checkRequired(value) { //funkcja sprawdzającą wymagalnośc pola

    if (!value) {
        return false;
    }
    value = value.toString().trim();
    if (value === "") {
        return false;
    }
 
    return true;
}

function checkTextLengthRange(value, min, max) { //funkcję sprawdzającą długość pola
    
    if (!value) {
        
        return false;
    }

    value = value.toString().trim();
    
    const length = value.length;
 
    if (max && length > max) {
        
        return false;
    }

    if (min && length < min) {
        
        return false;
    }

    return true;
}

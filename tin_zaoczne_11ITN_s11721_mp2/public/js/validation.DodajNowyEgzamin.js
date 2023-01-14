// kod wykorzystywany przy walidacji formularzy wywoływany przez class="form"  novalidate onsubmit="return validateForm();"
function validateForm() { // funkcja sprawdzająca pola formularza
    // pobieranie poszczególnych elementow pol na odpowiednie zmienne
    const myDateInput = document.getElementById('examDate');
    const itemInput = document.getElementById('subject');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const pointsInput = document.getElementById('points');
// pobieranie kounikatow błedow
    const errorMyDate = document.getElementById('errorMyDate');
    const errorItem = document.getElementById('errorItem');
    const errorStartTime = document.getElementById('errorStartTime');
    const errorPoints = document.getElementById('errorPoints');

    const errorSummary = document.getElementById('allForm2');
    
    // czyszczenie wczesniejszych komunikatow bledow
    resetErrors ([
    myDateInput,
    itemInput,
    startTimeInput,
    endTimeInput,
    pointsInput],
        [errorMyDate, errorItem, errorStartTime, errorPoints], errorSummary);
    
    let valid = true; // flaga ktora bedziez zmienna od wartosci formularza
    
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

    if (!checkRequired(itemInput.value)) { // weryfikacja czy pole zostalo wypelnione + regóły walidacji
        valid = false;
        itemInput.classList.add("error-input");
        errorItem.innerText = "Pole jest wymagane";
        errorItem.style.display="block";
        errorItem.classList.add("Errors");
    } else if (!checkTextLengthRange(itemInput.value, 3, 60)) { // weryfikacja odpowiedniej długosci w polu
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
    
    if (!valid) { // obsluga wyswietlania ogolnej informacji o bledach formularza
        errorSummary.innerText = "Formularz zawiera błędy";
        errorSummary.classList.add("Errors");
    }
    
    return valid; // Zwrot wartości flagi walidacyjnej w celu ustanowienia odpowieniego zachowania dla formularza w przypadku błędów (w przypadku false formularz nie zostanie wysłany):

}
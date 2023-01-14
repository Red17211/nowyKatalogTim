

function insertIntoDatabase(json) {

//ODPOWIEDZIALNY ZA UŻYCIE FUNKCJA KTORA UZYWA API DODAJE DZIEKI METODZIE POST ELEMENTY DO BAZY DANYCH UŻYWAJĄC API
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("POST", "../../api/questionexams", true); // LINK PRZYGOTOWANY NA POSTA I DODAJE W BAZIE ELEMENT
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(json); // WYWOŁUJE SIĘ METODA SET Z JESONEM Z TYM TEKSTEM Z EGAMINU 61

}
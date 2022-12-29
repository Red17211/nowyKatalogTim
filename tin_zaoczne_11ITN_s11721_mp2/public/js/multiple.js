

function insertIntoDatabase(json) {
//    alert("JOOOOaaa " + candidatePesel);
//    let questionExam = {
//      "examId": examId,
//      "questionId": questionId,
//      "answer": answer,
//      "answerTime": answerTime,
//      "candidatePesel": candidatePesel
//    }

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("POST", "../../api/questionexams", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(json);



//        let tablica = [];
//        <!--    Tworzenie obiektów-->
//        for(let i=0; i<counter; i++){
//            let aswString = "answer" + i;
//            let asw = document.querySelector('input[name='+aswString+']:checked').value;
//            let questionExam = {
//              "examId": document.getElementById("examId" + i).value,
//              "questionId": 1,
//              "answer": asw,
//              "answerTime": "12:34",
//              "candidatePesel": 65465465464
//            }
//            alert("Stworzono obiekt");
////            QuestionExam.createQuestionExam(questionExam);
//
//<!--            tablica[i].examId = document.querySelector('input[name="examId"+counter]:checked').value;-->
//<!--            tablica[i].questionId = document.querySelector('input[name="questionId"+counter]:checked').value;-->
//<!--            tablica[i].answer = document.querySelector('input[name="answer"+counter]:checked').value;-->
//<!--            tablica[i].answerTime = new Date();-->
//<!--            tablica[i].candidatePesel = document.querySelector('input[name="candidatePesel"+counter]:checked').value;-->
//
//<!--            console.log("examId ["+i+"]: " + tablica[i].examId;-->
//<!--            console.log("questionId ["+i+"]: " + tablica[i].questionId);-->
//<!--            console.log("answer ["+i+"]: " + tablica[i].answer);-->
//<!--            console.log("answerTime ["+i+"]: " + tablica[i].answerTime);-->
//<!--            console.log("candidatePesel ["+i+"]: " + tablica[i].candidatePesel);-->
        }
//    }
//    module.exports = {
//        insertIntoDatabase: insertIntoDatabase
//    }
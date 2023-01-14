const express = require('express'); //zaimportować bibliotekę express i uzyskać obiekt routera za pomocą wywołania funkcji
const router = express.Router();
// utworzenie routera, który przekieruje odpowiednie żądania http skierowane do serwera na wywołania metod nowego kontrolera
const examController = require('../controllers/egzaminController'); //odwołać się do naszego kontrolera, jego również musimy zaimportować
router.get('/', examController.showEgzaminListaEgzaminow);

router.get('/dodajEgzamin', examController.showEgzaminDodajEgzamin); //podłączamy odpowiednie żądania http do naszej metody w kontrolerze
router.get('/details/:examId', examController.showExamDetails);  //ządania http typu GET pod adresem / będą przekierowane na metodę showEmployeeList w naszym kontrolerze.
router.get('/edit/:examId', examController.showEditPage); // wyświetlania szczegółów umożliwiamy przekazanie parametru o nazwieempId na ścieżce adresu
router.get('/added', examController.showAddedConfirmation); //który może być w przyszłości odczytany przez kontroler w celu pobrania właściwego pracownika z bazy do
router.get('/edited', examController.showEditedConfirmation);
router.get('/deleted', examController.showDeletedConfirmation);
router.get('/deleteConfirmation', examController.showConfirmPage);

router.post('/add', examController.addExam);
router.post('/edit', examController.updateExam);
router.get('/delete/:examId', examController.deleteExam);

module.exports = router; //ksportujemy obiekt routera (jako domyślny obiekt), aby mógł być użyty w innych częściach aplikacji.
//zarejestrować nasz router w konfiguracji aplikacji  app.js
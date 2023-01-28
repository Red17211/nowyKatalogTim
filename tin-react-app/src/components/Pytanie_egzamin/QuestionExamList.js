import { Link } from 'react-router-dom';
import { getQuestionExamApiCall } from '../../apiCalls/questionExamApiCalls';

    function QuestionExamList() {
        const questionExamList = getQuestionExamApiCall()
        return (

        <main>
                    <h2>Egzaminy: Udzielone odpowiedzi</h2>
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Odpowiedź</th>
                                <th>Godzina odpowiedzi</th>
                                <th>Imię</th>
                                <th>Nazwisko</th>
                                <th>Pesel egzaminowanego</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                    <tbody>

                    {questionExamList.map(questionExam => (
                            <tr key={questionExam._id}>
                               <td>{questionExam._id}</td>
                               <td>{questionExam.answer}</td>
                               <td>{questionExam.responseTime}</td>
                               <td>{questionExam.name}</td>
                               <td>{questionExam.surname}</td>
                               <td>{questionExam.pesel}</td>
                            <td>
                                <ul className="list-actions">
                                    <li>
                                        <Link to={`pytanieEgzamin/details/${questionExam._id}`} className="list-actions-button-details">Szczegóły</Link>
                                    </li>
                                    <li>
                                        <Link to={`pytanieEgzamin/edit/${questionExam._id}`} className="list-actions-button-edit">Edytuj</Link>
                                    </li>
                                    <li>
                                        <Link to={`pytanieEgzamin/delete/${questionExam._id}`} className="list-actions-button-delete">Usuń</Link>
                                    </li>
                               </ul>
                        </td>
                    </tr>
                ))}
                    </tbody>
                </table>
                <p className="section-buttons">
                     <Link to="/pytanieEgzamin/add" className="button-add">Rozpocznij egzamin</Link>
                </p>
            </main>
    );
}

export default QuestionExamList
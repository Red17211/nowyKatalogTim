import { Link } from 'react-router-dom';
import { getExamApiCall } from '../../apiCalls/examApiCalls';

    function ExamList() {
        const examList = getExamApiCall()
        return (

        <main>
                    <h2>Lista egzaminów</h2>
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Data egaminu</th>
                                <th>Przedmiot</th>
                                <th>Godzina rozpoczęcia</th>
                                <th>Godzina zakończenia</th>
                                <th>Liczba punktów</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
               <tbody>

                    {examList.map(exam => (
                            <tr key={exam._id}>
                               <td>{exam._id}</td>
                               <td>{exam.date}</td>
                               <td>{exam.subject}</td>
                               <td>{exam.startTime}</td>
                               <td>{exam.endTime}</td>
                               <td>{exam.points}</td>
                            <td>
                                <ul className="list-actions">
                                    <li>
                                        <Link to={`egzamin/details/${exam._id}`} className="list-actions-button-details">Szczegóły</Link>
                                    </li>
                                    <li>
                                        <Link to={`egzamin/edit/${exam._id}`} className="list-actions-button-edit">Edytuj</Link>
                                    </li>
                                    <li>
                                        <Link to={`egzamin/delete/${exam._id}`} className="list-actions-button-delete">Usuń</Link>
                                    </li>
                               </ul>
                            </td>
                        </tr>
                    ))}
               </tbody>
                </table>
                <p className="section-buttons">
                     <Link to="/egzamin/add" className="button-add">Dodaj nowy egzamin</Link>
                </p>
            </main>
    );
}

export default ExamList
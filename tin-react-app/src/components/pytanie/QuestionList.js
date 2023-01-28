import { Link } from 'react-router-dom';
import { getQuestionApiCall } from '../../apiCalls/questionApiCalls';

    function QuestionList() {
    const questionList = getQuestionApiCall()
    return (

        <main>
                    <h2>Pytanie</h2>
                    <table className="table-list">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Treść pytania</th>
                                <th>Odpowiedź 1</th>
                                <th>Odpowiedź 2</th>
                                <th>Odpowiedź 3</th>
                                <th>Poprawna odpowiedź</th>
                                <th>Przedmiot</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>

                        {questionList.map(question => (
                            <tr key={question._id}>
                               <td>{question._id}</td>
                               <td>{question.questionsContent}</td>
                               <td>{question.answer1}</td>
                               <td>{question.answer1}</td>
                               <td>{question.answer1}</td>
                               <td>{question.correctAnswer}</td>
                               <td>{question.subject}</td>
                            <td>
                                <ul className="list-actions">
                                    <li>
                                        <Link to={`pytanie/details/${question._id}`} className="list-actions-button-details">Szczegóły</Link>
                                    </li>
                                    <li>
                                        <Link to={`pytanie/edit/${question._id}`} className="list-actions-button-edit">Edytuj</Link>
                                    </li>
                                    <li>
                                        <Link to={`pytanie/delete/${question._id}`} className="list-actions-button-delete">Usuń</Link>
                                    </li>
                               </ul>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p className="section-buttons">
                     <Link to="/pytanie/add" className="button-add">Dodaj nowe pytanie</Link>
                </p>
            </main>
    );
}

export default QuestionList
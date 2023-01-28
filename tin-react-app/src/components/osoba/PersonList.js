import { Link } from 'react-router-dom'

function PersonList() {
    return (
        <main>
             <h2>Lista osób egzaminowanych</h2>
             <table id="tabelka" className="table-list">

                  <thead>
                        <tr>
                           <th>Pesel</th>
                           <th>Imię</th>
                           <th>Nazwisko</th>
                           <th>Kod uprawnienia</th>
                           <th>Akcje</th>
                         </tr>
                  </thead>

                  <tbody>
                        <tr>
                            <td>Jan</td>
                            <td>Kowalski</td>
                            <td>jan.kowalski@acme.com</td>
                            <td>Nowak</td>
                            <td>
                                <ul className="list-actions">
                                    <li>
                                         <Link to="/employees/details/1" className="list-actions-button-details">Szczegóły</Link>
                                    </li>
                                    <li>
                                        <Link to="/employees/edit/1" className="list-actions-button-edit">Edytuj</Link>
                                    </li>
                                    <li>
                                        <Link to="/employees/delete/1" className="list-actions-button-delete">Usuń</Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                           <td>Adam</td>
                           <td>Nowak</td>
                           <td>adam.nowak@acme.com</td>
                           <td>Nowak</td>
                           <td>
                                <ul className="list-actions">
                                   <li>
                                       <Link to="/employees/details/2" className="list-actions-button-details">Szczegóły</Link>
                                   </li>
                                   <li>
                                       <Link to="/employees/edit/2" className="list-actions-button-edit">Edytuj</Link>
                                   </li>
                                   <li>
                                        <Link to="/employees/edit/2" className="list-actions-button-delete">Usuń</Link>
                                   </li>
                                </ul>
                           </td>
                        </tr>
                        <tr>
                            <td>Adam</td>
                            <td>Nowak</td>
                            <td>adam.nowak@acme.com</td>
                            <td>Nowak</td>
                            <td>
                                <ul className="list-actions">
                                    <li>
                                        <Link to="/employees/details/2" className="list-actions-button-details">Szczegóły</Link>
                                    </li>
                                    <li>
                                        <Link to="/employees/edit/2" className="list-actions-button-edit">Edytuj</Link>
                                    </li>
                                    <li>
                                        <Link to="/employees/edit/2" className="list-actions-button-delete">Usuń</Link>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                  </tbody>
             </table>
        <p><Link to="/Osoba/add" className="button-add">Dodaj nową osobę</Link></p>

    </main>
    )
}

export default PersonList
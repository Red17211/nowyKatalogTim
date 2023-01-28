import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/exams">Egzamin</Link></li>
                <li><Link to="/questionExam">Pytanie egzamine</Link></li>
                <li><Link to="/question">Pytanie</Link></li>
                <li><Link to="/persons">Osoby</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
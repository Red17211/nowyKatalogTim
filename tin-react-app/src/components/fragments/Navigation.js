import { Link } from 'react-router-dom'
function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Strona główna</Link></li>
                <li><Link href="/Egzamin">Egzamin</Link></li>
                <li><Link href="/Pytanie_egzamine">Pytanie egzamine</Link></li>
                <li><Link href="/Pytanie">Pytanie</Link></li>
                <li><Link href="/Osoba">Osoba</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
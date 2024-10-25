import Link from 'next/link'

export default function Menu() {
    return (
        <nav className='menu'>
            <ul>
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/notas/notas-cps/cps">Check Points</Link> </li>
                <li> <Link href="/notas/notas-gs/gs">Global Solution</Link> </li>
                <li> <Link href="/notas/challenger">Challenger Sprints</Link></li>
            </ul>
        </nav>
    )
}

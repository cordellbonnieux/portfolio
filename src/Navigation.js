import Hamburger from './Hamburger'
import Menu from './Menu'
export default function Navigation() {
    return (
        <li id="navigation">
            <nav>
                <Hamburger />
                <Menu />
            </nav>
        </li>
    )
}
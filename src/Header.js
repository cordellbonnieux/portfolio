export default function Header() {
    return (
        <header className="App-header">
            <ul>
                <li>
                    <h1 className="typewriter">
                        Cordell Bonnieux
                    </h1>
                    <h2 className="typewriter">
                        Developer Portfolio
                    </h2>
                </li>
                <li id="navigation">
                    <nav>
                    <div id="hamburger">
                        <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                    <ul className="hide">
                        <li>
                        <a href="#">Bio</a>
                        </li>
                        <li>
                        <a href="#">Projects</a>
                        </li>
                        <li>
                        <a href="#">Contact</a>
                        </li>
                    </ul>
                    </nav>
                </li>
            </ul>
        </header>
    )
}
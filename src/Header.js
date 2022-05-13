export default function Header() {
    return (
        <header className="App-header">
            <ul>
                <li>
                    <h1 className="typewriter">
                        Cordell Bonnieux
                    </h1>
                    <h2>
                        Developer Portfolio
                    </h2>
                </li>
                <li id="navigation">
                    <nav>
                    <div id="hamburger">
                        <span>
                        <span></span>
                        <span></span>
                        <span></span>
                        </span>
                    </div>
                    <ul>
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
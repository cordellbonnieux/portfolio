import Title from './Title'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className="App-header">
            <div id="avatar"></div>
            <ul>
                <Title />
                <Navigation />
            </ul>
        </header>
    )
}
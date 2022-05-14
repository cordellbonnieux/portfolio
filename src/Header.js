import Title from './Title'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className="App-header">
            <ul>
                <Title />
                <Navigation />
            </ul>
        </header>
    )
}
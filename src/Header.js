import Title from './Title'
import Navigation from './Navigation'

export default function Header(props) {
    const [ h1, h2, id ] = [ props ]
    console.log(h1, h2, id) // undefined?
    return (
        <header className="App-header">
            <ul>
                <Title />
                <Navigation />
            </ul>
        </header>
    )
}
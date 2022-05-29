import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

function App(props) {
  let { projects, bio } = props
  return (
    <div className="App" key="app">
      <Header key="header"/>
      <Main projects={projects} bio={bio} key="main" />
      <Footer key="footer"/>
    </div>
  )
}

export default App

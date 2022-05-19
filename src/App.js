import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './App.css'
import database from './firebase'


function App() {
  console.log(database)
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App

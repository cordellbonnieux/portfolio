import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './App.css'
import data from './firebase'


function App() {
  console.log(data)
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App

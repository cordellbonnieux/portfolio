import Header from './Header'
import Main from './Main' // put this back in later
import Footer from './Footer'
import './App.css'
import data from './firebase'

function App() {
  //console.log(data)
  //console.log(data[0])
  const { h1, h2, id } = data
  console.log(h1, h2, id)
  return (
    <div className="App">
      <Header h1={h1} h2={h2} id={id}/>

      <Footer />
    </div>
  )
}

export default App

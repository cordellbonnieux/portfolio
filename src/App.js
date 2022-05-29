import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

//import imgs
import asteroids from './img/astroids.png'
import audiopile from './img/audiopile.png'
import ball from './img/ball.png'
import dons from './img/dons.png'
import hagl from './img/hagl.png'
import kitty from './img/kitty.png'
import tic from './img/tic-tac-toe.png'
import weather from './img/weather.png'

function App(props) {
  let { projects, bio } = props
  const images = [
    {
      path: asteroids,
      title: 'Asteroid Blaster'
    },
    {
      path: hagl,
      title: 'Have A Good Laugh'
    },
    {
      path: audiopile,
      title: 'Audiopile'
    },
    {
      path: weather,
      title: 'Weather App'
    },
    {
      path: ball,
      title: 'Bouncy Ball'
    },
    {
      path: dons,
      title: 'Cafe Page'
    },
    {
      path: kitty,
      title: '"Kitty Generator'
    },
    {
      path: tic,
      title: 'Tic-Tac-Toe'
    }
  ]
  return (
    <div className="App" key="app">
      <Header key="header"/>
      <Main projects={projects} bio={bio} images={images} key="main" />
      <Footer key="footer"/>
    </div>
  )
}

export default App

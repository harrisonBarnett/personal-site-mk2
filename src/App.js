import './static/App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = ()=> {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/projects' component={Projects} />
      <Footer />
    </Router>
  )
}

export default App

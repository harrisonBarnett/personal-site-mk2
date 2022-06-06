import './static/App.css'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Workout from './workout/Workout'

const App = ()=> {
  return (
    <Router>
      <Header />
      <div id='page-content'>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path ='/blog' component={Blog} />
        <Route path = '/workout' component={Workout} />
      </div>
      <Footer />
    </Router>
  )
}

export default App

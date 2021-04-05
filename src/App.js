import React from 'react';
import './App.css';
import Navbar  from './components/Navbar/Navbar';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Work from './Pages/Work';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/work" exact component={Work}/>
        <Route path="/education" exact component={Education}/>
        <Route path="/skills" exact component={Skills}/>
      </Switch>
      </Router> 
      <Footer/>
      
    </div>
  );
}

export default App;

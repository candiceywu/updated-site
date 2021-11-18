import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ceremony from './components/pages/Ceremony';
import Gifting from './components/pages/Gifting';
import Lodging from './components/pages/Lodging';
import Schedule from './components/pages/Schedule';
import Contact from './components/pages/Contact';





function App() {
  return (
    <>
      <Router>
        {/* <Home /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/ceremony' component={Ceremony} />
          <Route path='/lodging' component={Lodging} />
          <Route path='/gifting' component={Gifting} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

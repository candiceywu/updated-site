import React, { useState } from 'react';
import LoginForm from './components/pages/LoginForm';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Ceremony from './components/pages/Ceremony';
import Gifting from './components/pages/Gifting';
import Lodging from './components/pages/Lodging';
import Schedule from './components/pages/Schedule';
import Contact from './components/pages/Contact';

function App() {
  const adminUser = {
    password: 'CandoandLianCDMX'
  }

  const [user, setUser] = useState({ password: "" });
  const [error, setError] = useState("");

  const login = details => {
    console.log(details);

    if (details.password == adminUser.password) {
      console.log('logged in');
      setUser({
        password: details.password
      })
    } else {
      console.log("password does not match.")
    }
  }

  const logout = () => {
    console.log("logout");
  }

  return (
    <Router>
    <div className="App">
      {(user.password != "") ? (
        <div className="container-fluid">
          <Route exact path='/'> <Home /> </Route>
          <Route exact path='/schedule'> <Schedule /> </Route>
          <Route exact path='/ceremony'> <Ceremony /> </Route>
          <Route exact path='/lodging'> <Lodging /> </Route>
          <Route exact path='/gifting'> <Gifting /> </Route>
          <Route exact path='/contact'> <Contact /> </Route>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
    </Router>
  );
}

export default App;


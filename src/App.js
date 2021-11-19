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
          <Route path='/' component={Home}/>
          <Route path='/schedule' component={Schedule} />
          <Route path='/ceremony' component={Ceremony} />
          <Route path='/lodging' component={Lodging} />
          <Route path='/gifting' component={Gifting} />
          <Route path='/contact' component={Contact} />
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
    </Router>
  );
}

export default App;


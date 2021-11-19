import React from 'react';
import '../../App';
import '../../App.css';
import { Link, Router } from 'react-router-dom';

function Home() {
  return (
    
    <section className="container">
      <div className="header">
        <header>Candice Wu</header>
        <header>& Lian Han</header>
      </div>
      <div className="home-pages">
        <ul className='home-ul'>
          <li className='nav-li'>
            <Link to={'/schedule'}>
              Schedule
            </Link>
          </li>
          <li className='nav-li'>
            <Link to={'/lodging'}>
              Lodging
            </Link>
          </li>
          <li className='nav-li'>
            <Link to={'/ceremony'}>
              Day of
            </Link>
          </li>
          <li className='nav-li'>
            <Link to={'/gifting'}>
              Gifting
            </Link>
          </li>
          <li className='nav-li'>
            <Link to={'/contact'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section >
    
  )
}

export default Home;

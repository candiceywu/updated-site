import React from 'react';
import '../../App';
import './Home.css';
import { Link } from 'react-router-dom';


const styles = {
  a: {
    fontSize: '150px',
    color:'#1c38ba',
    padding: '100px 0px 0px 60px'
  },
  b: {
    fontSize: '150px',
    color:'#1c38ba',
    padding: '0px 0px 130px 460px'
  }
}

function Home() {
  return (
    <section className="hero-container">
    
        <div className="heading">
          <h1 style={styles.a}>Candice Wu</h1>
          <h2 style={styles.b}>& Lian Han</h2>
        </div>
        <div className="nav-container">
          <ul className='nav-ul'>
            <li className='nav-li'>
              <Link to='/schedule' className='nav-links'>
                Schedule
              </Link>
            </li>
            
            <li className='nav-li'>
              <Link
                to='/lodging'
                className='nav-links'
              >
                Lodging
              </Link>
            </li>
            
            <li className='nav-li'>
              <Link
                to='/ceremony'
                className='nav-links'
              >
                Day of
              </Link>
            </li>

            <li className='nav-li'>
              <Link
                to='/gifting'
                className='nav-links'
              >
                Gifting
              </Link>
            </li>

            <li className='nav-li'>
              <Link
                to='/contact'
                className='nav-links'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
  

    </section >
  )
}

export default Home;

import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import './Sidenav.css';
import { Nav } from 'react-bootstrap';



function Sidenav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <Nav xs lg="3" className='navbar'>
          <div className="nav-container">
            <ul className='nav-ul'>
            <li className='nav-li'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-li'>
              <Link
                to='/schedule'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Schedule
              </Link>
            </li>
            <li className='nav-li'>
              <Link
                to='/ceremony'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ceremony
              </Link>
            </li>

            <li className='nav-li'>
              <Link
                to='/lodging'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Lodging
              </Link>
            </li>
            <li className='nav-li'>
              <Link
                to='/gifting'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gifting
              </Link>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
}

export default Sidenav;



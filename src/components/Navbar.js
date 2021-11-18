import React from 'react';
import '../App';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <h1>Candice Wu <br></br>& Lian Han</h1>
            </div>
            <div className="Navbar">
                <ul className='nav-ul'>
                    <li className='nav-li'>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link to="/lodging">
                            Lodging
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link to="/schedule">
                            Schedule
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link to="/ceremony">
                            Ceremony
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link to="/gifting">
                            Gifting
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

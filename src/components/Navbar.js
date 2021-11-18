import React from 'react';
import '../App';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <section>
            <div  className="navbar-header">
                <h1 a style={styles.header}>Candice Wu <br></br>& Lian Han</h1>
            </div>
            <div a style={styles.pages} className="Navbar">
                <ul className='nav-ul'>
                    <li className='nav-li'>
                        <Link a style={styles.links} to="/">
                            Home
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link a style={styles.links} to="/lodging">
                            Lodging
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link a style={styles.links} to="/schedule">
                            Schedule
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link a style={styles.links} to="/ceremony">
                            Ceremony
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link a style={styles.links} to="/gifting">
                            Gifting
                        </Link>
                    </li>
                    <li className='nav-li'>
                        <Link a style={styles.links} to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar;

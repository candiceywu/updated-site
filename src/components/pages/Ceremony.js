import React from 'react';
import '../../App.css';
import './DustAndGray.css';
import { Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar';

const styles = {
  a: {
    background: '#DDDDDD'
  },
  h1: {
    color: '#7a2b23',
    fontSize: '120px',
    fontWeight: 'bold'
  }
}

export default function Ceremony() {
  return (
    <div>
      <Row className="schedule-container">
        <Col xs md lg="3" className="left-bar">
          <Navbar />
        </Col>

        <Col a style={styles.a} className="schedule-section">
          <div>
            <h1 a style={styles.h1}>
              Ceremony
            </h1>
            <p className="schedule-section-text">Our wedding will take place on Friday, April 15, 2022 from 4:30PM to 1:00AM at Proyecto Público Prim 30 (Calle Gral. Prim 30, Juárez, Cuauhtémoc, 06600 CDMX).</p>
          </div>
          <div>
            <h2>Dress Code</h2>
            <p>We would like all guests to be comfortable. Please use the following colors to help guide your outfit decisions.</p>
            <p>Please avoid from wearing black, blue, red or purple.</p>
            <h2>Children</h2>
            <p>We invite you to bring your children and family to Mexico City. Although we love your little ones, let's have the night to ourselves and share our time together at the ceremony and reception.</p>
            <h3>Babysitters</h3>
            <p>Our wedding planners are more than happy to arrange a babysitter for your little one(s) at the Hyatt Recency during the ceremony and reception. Please let us know, and we'll gladly help you with logistics.</p>
            <h2>Transportation</h2>
            <p>For our loved ones staying at the Hyatt Recency, we will have chartered buses for pick-up and drop-off to Proyecto Público Prim 30. Otherwise, Uber is very easy in CDMX, but please take into consideration any traffic as you plan your transportation.</p>
            <h2>Ceremony</h2>
            <p>The ceremony will begin promptly at 4:30PM.</p>
            <h2>Dinner</h2>
            <p>Dinner will be local, Mexico-forward family-style and feature proteins, seafood and vegetables that we hope accomodates everyone's dietary restrictions and preferences. If you have a specific question about the menu or food preparation, please reach out to us in advance.</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}



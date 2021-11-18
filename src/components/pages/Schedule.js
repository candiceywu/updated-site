import React from 'react';
import '../../App.css';
import './DustAndGray.css';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../Navbar';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
      borderColor: color
    }}
  />
);

const styles = {
  a: {
    fontSize: '16px',
    fontStyle: 'italic'
  },
  b: {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 'bold',
    background: '#DDDDDD'
  },
  c: {
    background: '#DDDDDD'
  },
  d: {
    fontSize: '16px',
    fontStyle: 'italic',
    background: '#DDDDDD'
  },
  e: {
    fontSize: '120px',
    fontWeight: 'bold'
  }
}


export default function Schedule() {
  return (
    <div>
      <Row className="schedule-container">
        <Col xs lg="3" className="left-bar-blue">
          <Navbar />
        </Col>


        <Col a style={styles.c} className="schedule-section">
          <h1 a style={styles.e}>
            Schedule
          </h1>
          <p a style={styles.c} className="schedule-section-text">We're so grateful that you'll be attending our wedding. We'll see you in Mexico City.</p>
          <ColoredLine color="#1c38ba" />

          <Row a style={styles.c} className="schedule-subsection">
            <Col a style={styles.c} xs lg="5" className="schedule-subsection-left">
              <h3 a style={styles.c} >Thursday, April 14, 2022</h3>
              <h4 a style={styles.d}>put final time here</h4>
              <h2 a style={styles.c} >Welcome Cocktails</h2>
            </Col>
            <Col a style={styles.c} className="schedule-subsection-right">
              <p a style={styles.c} className="schedule-subsection-right-top-text">We will be hosting welcome drinks and small bites for everyone to meet and mingle. <br></br>Cocktail attire is recommended.</p>
              <p a style={styles.c} className="schedule-subsection-right-bottom-text">Sobremesa</p>
              <p a style={styles.c} className="schedule-subsection-right-bottom-address">Puebla 135, Roma Norte<br></br>Cuauhtémoc, 06700 Ciudad de Mexico</p>
            </Col>
          </Row>
          <ColoredLine color="#1c38ba" />

          <Row a style={styles.c} className="schedule-subsection">
            <Col a style={styles.c} xs lg="5" className="schedule-subsection-left">
              <h3 a style={styles.c}>Friday, April 15, 2022</h3>
              <h2 a style={styles.c} >Wedding Day</h2>
              <h4 a style={styles.d}>ceremony begins promptly at 4:30PM</h4>
            </Col>
            <Col a style={styles.c} className="schedule-subsection-right">
              <p a style={styles.c} className="schedule-subsection-right-top-text">We are so thrilled to share this moment with you. Our ceremony will begin promptly at 4:30PM, so please plan your afternoon accordingly. More details about the ceremony
                <Link a style={styles.b} className="ceremony-link"
                  to='/ceremony'
                > here.
                </Link></p>
              <p a style={styles.c} className="schedule-subsection-right-bottom-text">Proyecto Público Prima</p>
              <p a style={styles.c} className="schedule-subsection-right-bottom-address">Calle Gral. Prim 30, Juárez<br></br>Cuauhtémoc, 06600 Ciudad de México</p>
            </Col>
          </Row>
          <ColoredLine color="#1c38ba" />

          <Row a style={styles.c} className="schedule-subsection">
            <Col a style={styles.c} xs lg="5" className="schedule-subsection-left">
              <h3 a style={styles.c} >Saturday, April 16, 2022</h3>
              <h2 a style={styles.c} >Brunch</h2>
            </Col>
            <Col a style={styles.c} className="schedule-subsection-right">
              <p a style={styles.c} className="schedule-subsection-right-top-text">text goes here.</p>
              <p a style={styles.c} className="schedule-subsection-right-bottom-text">location here</p>
              <p a style={styles.c} className="schedule-subsection-right-bottom-address">address here</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}



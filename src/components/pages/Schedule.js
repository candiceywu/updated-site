import React from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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


export default function Schedule() {
  return (
    <div>
      <Row className="container">
        <Col xs lg="3" className="left-section">
          <Navbar />
        </Col>

        <Col className="right-section">
          <h1>
            Schedule
          </h1>
          <p className="right-section-p">We're so grateful that you'll be attending our wedding. We'll see you in Mexico City.</p>
          <ColoredLine color="#1c38ba" />

          <Row className="right-section-subsection">
            <Col xs lg="5" className="right-section-subsection-info">
              <h3>Thursday, April 14, 2022</h3>
              <h4>put final time here</h4>
              <h2>Welcome Cocktails</h2>
            </Col>
            <Col className="right-section-subsection-body">
              <p className="right-section-subsection-p">We will be hosting welcome drinks and small bites for everyone to meet and mingle. <br></br>Cocktail attire is recommended.</p>
              <p className="right-section-subsection-location">Sobremesa</p>
              <p className="right-section-subsection-address">Puebla 135, Roma Norte<br></br>Cuauhtémoc, 06700 Ciudad de Mexico</p>
            </Col>
          </Row>
          <ColoredLine color="#1c38ba" />

          <Row className="right-section-subsection">
            <Col xs lg="5" className="right-section-subsection-info">
              <h3>Friday, April 15, 2022</h3>
              <h2>Wedding Day</h2>
              <h4>ceremony begins promptly at 4:30PM</h4>
            </Col>
            <Col className="right-section-subsection-body">
              <p className="right-section-subsection-p">We are so thrilled to share this moment with you. Our ceremony will begin promptly at 4:30PM, so please plan your afternoon accordingly. More details about the ceremony
                <Link className="link"
                  to='/ceremony'
                > here.
                </Link></p>
              <p className="right-section-subsection-location">Proyecto Público Prima</p>
              <p className="right-section-subsection-address">Calle Gral. Prim 30, Juárez<br></br>Cuauhtémoc, 06600 Ciudad de México</p>
            </Col>
          </Row>
          <ColoredLine color="#1c38ba" />

          <Row className="right-section-subsection">
            <Col xs lg="5" className="right-section-subsection-info">
              <h3 >Saturday, April 16, 2022</h3>
              <h2 >Brunch</h2>
            </Col>
            <Col className="right-section-subsection-body">
              <p className="right-section-subsection-p">text goes here.</p>
              <p className="right-section-subsection-location">location here</p>
              <p className="right-section-subsection-address">address here</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}



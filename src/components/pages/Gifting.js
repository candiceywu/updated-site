import React from 'react';
import '../../App.css';
import './GreenAndYellow.css';
import { Row, Col } from 'react-bootstrap';
import NavbarRust from '../NavbarRust';


const styles = {
    a: {
      background: '#E6bc4e'
    },
    h1: {
      color: '#7a2b23',
      fontSize: '120px',
      fontWeight: 'bold'
    },
    p: {
        color: '#7a2b23' 
    },
    pbold: {
      fontWeight: 'bold',
      color: '#7a2b23' 
    }
  }
  
export default function Gifting() {
    return (
        <div>
            <Row className="contact-container">
                <Col xs md lg="3" className="left-bar">
                    <NavbarRust />
                </Col>

                <Col a style={styles.a} className="contact-section">
                    <h1 a style={styles.h1}>
                        Gifting
                    </h1>
                    <p a style={styles.p}className="contact-section-text">Again, thank you so much for attending our wedding and celebrating with us. Once we get settled into our married life, we're looking forward to planning our honeymoon. If you'd like to contribute a gift, we'd graciously accept any cash gifts for our honeymoon fund that you would be comfortable giving.</p>

                    <Row className="contact-subsection">
                        <Col xs md lg="4" className="contact-subsection-left" a style={styles.pbold}>
                            <p>Lian's Venmo:<br></br>@Lian-Han</p>
                        </Col>
                        <Col className="schedule-subsection-right" a style={styles.pbold}>
                            <p>Candice's Venmo:<br></br>@Candicewu</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}





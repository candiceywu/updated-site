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
    }
  }
  
export default function Contact() {
    return (
        <div>
            <Row className="contact-container">
                <Col xs md lg="3" className="left-bar">
                    <NavbarRust />
                </Col>

                <Col a style={styles.a} className="contact-section">
                    <h1 a style={styles.h1}>
                        Contact
                    </h1>
                    <p a style={styles.p}className="contact-section-text">Have questions or comments?</p>
                    <p a style={styles.p}>Please feel free to call, email or text us at any time.</p>

                    <Row className="contact-subsection">
                        <Col xs md lg="4" className="contact-subsection-left">
                            <p>Lian Han<br></br>2053443975<br></br>lhan88@gmail.com</p>
                        </Col>
                        <Col className="schedule-subsection-right">
                            <p>Candice Wu<br></br>9493789189<br></br>candice.ying.wu@gmail.com</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}





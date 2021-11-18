import React from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar';
  
export default function Contact() {
    return (
        <div>
            <Row className="container">
                <Col xs md lg="3" className="left-section">
                    <Navbar />
                </Col>

                <Col className="right-section">
                    <h1>
                        Contact
                    </h1>
                    <p className="right-section-p">Have questions or comments?</p>
                    <p className="right-section-p-2">Please feel free to call, email or text us at any time.</p>

                    <Row className="right-section-subsection">
                        <Col xs md lg="4" className="right-section-subsection-1">
                            <p>Lian Han<br></br>2053443975<br></br>lhan88@gmail.com</p>
                        </Col>
                        <Col className="right-section-subsection-2">
                            <p>Candice Wu<br></br>9493789189<br></br>candice.ying.wu@gmail.com</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}





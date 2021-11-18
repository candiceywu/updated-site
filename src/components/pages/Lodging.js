import React from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar';

export default function Lodging () {
    return (
        <div>
            <Row className="container">
                <Col xs md lg="3" className="left-section">
                    <Navbar />
                </Col>

                <Col className="right-section">
                    <h1>
                        Lodging
                    </h1>
                    <p className="right-section-p">hotel text here.</p>

                    <Row className="right-section-subsection">
                        <Col xs md lg="4" className="right-section-subsection-1">
                            <p>Hyatt Regency<br></br>address</p>
                        </Col>
                        <Col className="right-section-subsection-2">
                            <p>Airbnbs<br></br>info</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}





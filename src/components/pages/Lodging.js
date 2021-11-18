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
                    <p className="right-section-p">Again, thank you so much for attending our wedding and celebrating with us. Once we get settled into our married life, we're looking forward to planning our honeymoon. If you'd like to contribute a gift, we'd graciously accept any cash gifts for our honeymoon fund that you would be comfortable giving.</p>

                    <Row className="right-section-subsection">
                        <Col xs md lg="4" className="right-section-subsection-1">
                            <p>Lian's Venmo:<br></br>@Lian-Han</p>
                        </Col>
                        <Col className="right-section-subsection-2">
                            <p>Candice's Venmo:<br></br>@Candicewu</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}





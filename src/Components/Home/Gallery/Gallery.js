import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img_1 from '../../../images/download-1.jpg'
import img_2 from '../../../images/download-2.jpg'
import img_3 from '../../../images/download-3.jpg'
import img_4 from '../../../images/download-4.jpg'
import img_5 from '../../../images/download-5.jpg'
import img_6 from '../../../images/download-6.jpg'
import './Gallery.css'
const Gallery = () => {
    return (
        <div>
        <div className="my-5">
            <h5 className="text-success">Pictures</h5>
            <h2 className="text-warning">Enjoy Your tours With US </h2>
        </div>
        <Container>
        
            <Row className="my-4" xs={1} md={2}lg={3}>
                <Col className="my-3 contain">
                <img style={{height:'20rem'}} className="w-100" src={img_1} alt="" />
                <div className="overlay">
                    <h2 style={{fontWeight:'700',fontSize:'30px'}} className="text">Sylet</h2>
                </div>
                </Col>
                <Col className="my-3 contain">
                <img style={{height:'20rem'}} className="w-100" src={img_2} alt="" />
                <div className="overlay">
                    <h2 style={{fontWeight:'700',fontSize:'30px'}} className="text">London</h2>
                </div>
                </Col>
                <Col className="my-3 contain">
                <img style={{height:'20rem'}} className="w-100" src={img_3} alt="" />
                <div className="overlay">
                    <h2 style={{fontWeight:'700',fontSize:'30px'}} className="text">New york</h2>
                </div>
                </Col>
            </Row>
            <Row xs={1} md={2}lg={3}>
                <Col className="my-3 contain">
                <img style={{height:'20rem'}} className="w-100" src={img_4} alt="" />
                <div className="overlay">
                    <h2 style={{fontWeight:'700',fontSize:'30px'}} className="text">Goa</h2>
                </div>
                </Col>
                <Col className="my-3 contain">
                <img style={{height:'20rem'}} className="w-100" src={img_5} alt="" />
                <div className="overlay">
                    <h2 style={{fontWeight:'700',fontSize:'30px'}} className="text">Dubai</h2>
                </div>
                </Col>
                <Col className="my-3 contain">
                <img style={{height:'20rem'}} className="w-100" src={img_6} alt="" />
                <div className="overlay">
                    <h2 style={{fontWeight:'700',fontSize:'30px'}} className="text">Maldives</h2>
                </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Gallery;
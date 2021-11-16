import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img_1 from '../../../images/rev-4.jpg'
import img_2 from '../../../images/rev-5.jpg'
import img_3 from '../../../images/rev-7.jpg'
import './Review.css'
const Review = () => {
    return (
        <div>
        <Container className="my-5">
        <div className="my-5">
            <h5 className="text-warning">Our Client's Review</h5>
            <h2 className="lg-txt text-info">Here what Our clients Say</h2>
        </div>
            <Row xs={1} md={2} lg={3} className="g-4">
  {
    <Col>
      <Card className="py-5 rev-1">
          <div className="text-center">
          <Card.Img className="w-25" variant="top" src={img_1} />
          </div>
       
        <Card.Body>
          <Card.Title className="fw-bold">Anisa Islam </Card.Title>
          <Card.Title className="travel-txt">Coder</Card.Title>
          <Card.Text>
            I'm quite satisfy with their service. They are very friendly and give me super fast service all the time. Good Luch for them!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 }
  {
    <Col>
      <Card className="py-5">
          <div className="text-center">
          <Card.Img className="w-25" variant="top" src={img_2} />
          </div>
        
        <Card.Body>
          <Card.Title className="fw-bold">Shafia Isam</Card.Title>
          <Card.Title className="travel-txt">Banker</Card.Title>
          <Card.Text>
          I'm quite satisfy with their service. They are very friendly and give me super fast service all the time. Good Luch for them!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 }
  {
    <Col>
      <Card className="py-5">
        <div className="text-center">
        <Card.Img className="w-25" variant="top" src={img_3} />
        </div>
        <Card.Body>
        <Card.Title className="fw-bold">Nodi Khan</Card.Title>
        <Card.Title className="travel-txt">Model</Card.Title>
          <Card.Text>
          I'm quite satisfy with their service. They are very friendly and give me super fast service all the time. Good Luch for them!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 }
</Row>
            </Container>

        </div>
    );
};

export default Review;
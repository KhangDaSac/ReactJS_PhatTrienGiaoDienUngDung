import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuList from '../components/MenuList';
import { useMenu } from '../context/MenuContext';

const Home = () => {
  const { menuItems } = useMenu();


  return (
    <div>
        <Container className="text-light py-5 bg-secondary">
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="display-3 fw-bold mb-4">ABC Restaurant</h1>
              <p className="lead mb-4">
                Chào mừng đến với nhà hàng
              </p>
              <Button 
                as={Link} 
                to="/menu" 
                variant="primary" 
                size="lg" 
                className="me-3"
              >
                Xem thực đơn
              </Button>
            </Col>
          </Row>
        </Container>

      <MenuList items={menuItems} />
    </div>
  );
};

export default Home;

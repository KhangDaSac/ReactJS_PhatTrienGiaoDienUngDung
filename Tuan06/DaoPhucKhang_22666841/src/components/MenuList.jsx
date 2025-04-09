import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const MenuList = ({ items }) => {
    const { addToCart } = useCart();
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };
    return (
        <>
            <Container className="py-5">
                <h1 className="text-center mb-5">Thực đơn</h1>
                <Row>
                    {items.map(item => (
                        <Col key={item.id} lg={4} md={6} className="mb-4">
                            <Card className="h-100 shadow-sm hover-effect">
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="fw-bold mb-3">{item.name}</Card.Title>
                                    <Card.Text className="text-muted mb-3">
                                        {item.description}
                                    </Card.Text>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <span className="fs-5 fw-bold text-primary">
                                            {formatPrice(item.price)}
                                        </span>
                                        <Button
                                            variant="outline-primary"
                                            onClick={() => addToCart(item)}
                                        >
                                            Thêm món
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default MenuList;

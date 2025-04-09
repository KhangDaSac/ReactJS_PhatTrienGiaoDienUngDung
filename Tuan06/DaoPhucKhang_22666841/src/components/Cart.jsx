import React, { useState } from 'react';
import { Button, Modal, ListGroup, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const [show, setShow] = useState(false);
    const { orders, removeFromCart, updateQuantity, getTotalPrice, getTotalQuantity } = useCart();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}
                style={{
                    position: 'fixed',
                    top: '100px',
                    right: '50px',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="position-relative">
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    {getTotalQuantity() > 0 && (
                        <Badge
                            bg="danger"
                            pill
                            style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '-10px'
                            }}
                        >
                            {getTotalQuantity()}
                        </Badge>
                    )}
                </div>
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Giỏ hàng của bạn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {getTotalQuantity() === 0 ? (
                        <p className="text-center">Giỏ hàng trống</p>
                    ) : (
                        <ListGroup>
                            {orders.map((item) => (
                                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '15px' }}
                                        />
                                        <div>
                                            <h6 className="mb-0">{item.name}</h6>
                                            <small className="text-muted">{formatPrice(item.price)}</small>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                        >
                                            -
                                        </Button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </Button>
                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            className="ms-3"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            ×
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Modal.Body>
                {getTotalQuantity() > 0 && (
                    <Modal.Footer className="justify-content-between">
                        <h5>Tổng tiền: {formatPrice(getTotalPrice())}</h5>
                    </Modal.Footer>
                )}
            </Modal>
        </>
    );
}

export default Cart;

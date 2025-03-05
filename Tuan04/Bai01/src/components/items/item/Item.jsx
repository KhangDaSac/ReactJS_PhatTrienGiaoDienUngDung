import React from "react";
import Card from 'react-bootstrap/Card';

const Item = ({ image, title }) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={image} style={{
                    width: '200px',
                    height: '150px'
                }}/>
                <Card.Body>
                    <h3 style={{
                        color: 'black',
                        maxWidth: '200px',
                        textAlign: 'left'
                    }}>{title}</h3>
                </Card.Body>
            </Card>
        </>

    );
}

export default Item
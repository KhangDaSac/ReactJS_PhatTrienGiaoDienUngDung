import React from "react";
import Card from 'react-bootstrap/Card';
import icon_infor from '../../../assets/icons/Icon-Button-73.png'

const Item = ({ image, title }) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={image} style={{
                    width: '200px',
                    height: '150px'
                }} />
                <Card.Body>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                         justifyContent: 'space-between'
                    }}>
                        <h3 style={{
                            color: 'black',
                            maxWidth: '200px',
                            textAlign: 'left',
                            marginLeft: '10px'
                        }}>{title}</h3>
                        <img src={icon_infor} alt="" style={{
                            width: '40px',
                            height: '40px'
                        }} />
                    </div>
                </Card.Body>
            </Card>
        </>

    );
}

export default Item
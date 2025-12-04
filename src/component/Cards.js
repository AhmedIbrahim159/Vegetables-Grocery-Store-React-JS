import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import "./card.css"

function Cards(props) {
    return (
        <Card className='center' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.price}
                </Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards

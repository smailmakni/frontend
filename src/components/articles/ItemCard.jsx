import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ItemCard = ({pr}) => {
  return (
    
    <div >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pr.imageart} />
      <Card.Body>
        <Card.Title>{pr.designation}</Card.Title>
        <Card.Text>
          {pr.prix} DT
        </Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ItemCard

import React from 'react';
import {Card,Button} from 'react-bootstrap'
const News = (props) => {
     console.log(props.article);
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
    <Card.Title></Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default News;
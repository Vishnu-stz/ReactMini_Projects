import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';




function HotelDetails({data}) {
    
    return (

        <Container>

            <Row>

                {
                    data.map( i => (

                        <Col sm = {12} md = {4} lg = {3} className=''> 

                            <Link to = {`detailsView/${i.id}`} style={{textDecoration:'none'}} >

                                <Card style={{ width: '18rem' , alignItems:'center' }} className='p-3 border border-3 border-light mt-3 mb-3 container'>
    
                                    <Card.Img variant="top" className='p-2 border border-primary text-center' style={{height : "380px" ,width : '100%'}} src={i.photograph}/>
    
                                    <Card.Body>
    
                                        <Card.Title className='border'> {i.name} </Card.Title>
                                        {/* <Card.Title> {i.mobile} </Card.Title> */}
    
                                        <Card.Text>
                                        Something to write...
                                        </Card.Text>
    
                                        {/* <ListGroup variant="">
                                            <ListGroup.Item> Place : {i.place} </ListGroup.Item>
                                            <ListGroup.Item> Email : {i.email} </ListGroup.Item>
                                        </ListGroup> */}
    
                                            <div className='mt-2 p-2'>

                                                <ListGroup variant="">
        
                                                    {/* <Card.Link href="#" >Card Link</Card.Link>
        
                                                    <Card.Link href="#">Another Link</Card.Link> */}
        
                                                    <Button variant="" className='mt-2' style={{padding:"11px 20px 11px 20px"}}>Go somewhere</Button>
        
                                                </ListGroup>

                                            </div>
    
                                    </Card.Body>
    
                                </Card>

                            </Link>

                        </Col>

                    ))
                }

            </Row>   

        </Container>

    )

}


export default HotelDetails
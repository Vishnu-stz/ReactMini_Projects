import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import OperatingTime from './OperatingTime';





function SingleView() {

  const [modalShow, setModalShow] = React.useState(false);

    const [allUser,setUser] = useState([])

    const params = useParams()
    

    const getUser = async() => {

        const result = await fetch('/restaurant.json') 

        // convert json to javascript
        result.json().then(data => {
            setUser(data.restaurants);
        })
    }

    // console.log(allUser);

    useEffect(() => {

        getUser()
        // console.log(params.id);
    },[])

    const singleUser = allUser.find(i => i.id == params.id)
    console.log(singleUser);

    
        return (

            <div>

                {
                    singleUser ? 

                        <div className='row border border-info border-2 m-5 p-2'>

                            <div className="col-md-6">

                                <img src={singleUser.photograph}  alt="" className='mt-3 mb-3 w-75 rounded-2' />

                            </div>

                            <div className="col-md-6">

                                <h3 className='mt-4 mb-4'> Name : <span className='border-bottom border-3 border-danger rounded-3'> {singleUser.name} </span> </h3>

                                <ListGroup className='container mt-2 mb-4 p-3 w-75'>

                                    <ListGroup.Item> neighborhood : <strong> {singleUser.neighborhood} </strong> </ListGroup.Item>

                                </ListGroup>

                                <ListGroup className='container p-3 mb-4 w-75'>

                                    <ListGroup.Item> Address : <strong> {singleUser.address} </strong> </ListGroup.Item>

                                </ListGroup>

                                <ListGroup className='container mt-2 mb-4 p-3 w-75'>

                                    <ListGroup.Item> Cuisine Type : <stronge> {singleUser.cuisine_type} </stronge> </ListGroup.Item>

                                </ListGroup>

                                <ListGroup className='container mt-2 mb-4 p-3 w-75'>

                                    <strong > <OperatingTime timeData={SingleView.operating_hours}></OperatingTime></strong>                                           

                                </ListGroup>

                                <ListGroup className='container mt-2 mb-5 p-3 w-75'>

                                    <FloatingLabel controlId="floatingSelect" label="Review">

                                        <Form.Select aria-label="Floating label select example">

                                            
                                           

                                        </Form.Select>

                                    </FloatingLabel>

                                </ListGroup>

                                


                               

                            </div>

                        </div>
                        
                    : <h1> No Details Found </h1>

                }

            </div>

        )

}




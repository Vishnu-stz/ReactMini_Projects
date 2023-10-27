import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRestaurants } from './actions/restAction';
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function SingleView() {

  let params = useParams();

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getRestaurants)
  } , []);

  const restaurants = useSelector(state => state.restReducer.restList);


  const singleDetail = restaurants.find(i => i.id == params.id);
  console.log(singleDetail);


  //react bootstrap
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (


    <div>

                {
                    singleDetail ? 

                        <div className='row border border-info border-2 m-5 p-2'>

                            <div className="col-md-6">

                                <img src={singleDetail.photograph}  alt="" className='mt-3 mb-3 w-75 rounded-2' />

                            </div>

                            <div className="col-md-6">

                              <h3 className='mt-4 mb-4'> Name : <span className='border-bottom border-3 border-danger rounded-3'> {singleDetail.name} </span> </h3>

                              <ListGroup className='container mt-2 mb-4 p-3 w-75'>

                                  <ListGroup.Item> neighborhood : <strong> {singleDetail.neighborhood} </strong> </ListGroup.Item>

                              </ListGroup>

                              <ListGroup className='container p-3 mb-4 w-75'>

                                  <ListGroup.Item> Address : <strong> {singleDetail.address} </strong> </ListGroup.Item>

                              </ListGroup>

                              <ListGroup className='container mt-2 mb-4 p-3 w-75'>

                                  <ListGroup.Item> Cuisine Type : <stronge> {singleDetail.cuisine_type} </stronge> </ListGroup.Item>

                              </ListGroup>

                              <ListGroup className='container mt-2 mb-4 p-3 w-75'>

                              <ListGroup.Item> 

                              <div class="d-flex">
                                
                                    <Button className='w-100' variant="warning" onClick={handleShow}>
                                        Operating Hours
                                    </Button>                          

                                    <Modal show={show} onHide={handleClose}>

                                        <Modal.Header closeButton>

                                        <Modal.Title>Operating Hours</Modal.Title>

                                        </Modal.Header>

                                        <Modal.Body>

                                            <ListGroup>

                                                <ListGroup.Item>  Monday    : {singleDetail.operating_hours.Monday}    </ListGroup.Item>
                                                <ListGroup.Item>  Tuesday   : {singleDetail.operating_hours.Tuesday}   </ListGroup.Item>
                                                <ListGroup.Item>  Wednesday : {singleDetail.operating_hours.Wednesday} </ListGroup.Item>
                                                <ListGroup.Item>  Thursday  : {singleDetail.operating_hours.Thursday}  </ListGroup.Item>
                                                <ListGroup.Item>  Friday    : {singleDetail.operating_hours.Friday}    </ListGroup.Item>
                                                <ListGroup.Item>  Saturday  : {singleDetail.operating_hours.Saturday}  </ListGroup.Item>
                                                <ListGroup.Item>  Sunday    : {singleDetail.operating_hours.Sunday}    </ListGroup.Item>

                                            </ListGroup>

                                        </Modal.Body>

                                        <Modal.Footer>

                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    
                                        </Modal.Footer>

                                    </Modal>

                                </div>

                              </ListGroup.Item>
                                                                                                           

                              </ListGroup>

                              <ListGroup className='container mt-3 mb-5 p-3 w-75'>

                                <div>
                                  <Accordion>
                                    <Accordion.Item eventKey="0">
                                      <Accordion.Header>Reviews</Accordion.Header>
                                      <Accordion.Body>
                                          <h3>{singleDetail.reviews[0].name}</h3>
                                          <p>{singleDetail.reviews[0].date}</p>
                                          <p>{singleDetail.reviews[0].rating}</p>
                                          <p>{singleDetail.reviews[0].comments}</p>
                                        <hr />
                                          <h3>{singleDetail.reviews[1].name}</h3>
                                          <p>{singleDetail.reviews[1].date}</p>
                                          <p>{singleDetail.reviews[1].rating}</p>
                                          <p>{singleDetail.reviews[1].comments}</p>
                                          <hr />
                                          <h3>{singleDetail.reviews[2].name}</h3>
                                        <p>{singleDetail.reviews[2].date}</p>
                                          <p>{singleDetail.reviews[2].rating}</p>
                                          <p>{singleDetail.reviews[2].comments}</p>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  </Accordion>
                                </div>                               

                              </ListGroup>

                            </div>

                        </div>
                        
                    : <h1> No Details Found </h1>

                }

            </div>


    // <div>
    //   {
    //     singleDetail ?
    //       <section>
    //         <div class="container">
    //           <div class="row">
    //             <div class="col-md-6">
    //               <img src={singleDetail.photograph} alt="" width="400" />
    //             </div>

    //             <div class="col-md-6">
    //               <h1>{singleDetail.name}</h1>
    //               <h3>Neighborhood : {singleDetail.neighborhood}</h3>
    //               <div>
    //                 <h5>Address: {singleDetail.address}</h5>
    //                 <p>Cuisine Type : {singleDetail.cuisine_type}</p>
    //               </div>

    //               <div class="d-flex">
    //                 <Button variant="primary" onClick={handleShow}>
    //                   Operating Hours
    //                 </Button>

    //                 <Modal show={show} onHide={handleClose}>
    //                   <Modal.Header closeButton>
    //                     <Modal.Title>Operating Hours</Modal.Title>
    //                   </Modal.Header>
    //                   <Modal.Body>
    //                     <h4>Monday: {singleDetail.operating_hours.Monday}</h4>
    //                     <h4>Tuesday: {singleDetail.operating_hours.Tuesday}</h4>
    //                     <h4>Wednesday: {singleDetail.operating_hours.Wednesday}</h4>
    //                     <h4>Thursday: {singleDetail.operating_hours.Thursday}</h4>
    //                     <h4>Friday: {singleDetail.operating_hours.Friday}</h4>
    //                     <h4>Saturday: {singleDetail.operating_hours.Saturday}</h4>
    //                     <h4>Sunday: {singleDetail.operating_hours.Sunday}</h4>

    //                   </Modal.Body>
    //                   <Modal.Footer>
    //                     <Button variant="secondary" onClick={handleClose}>
    //                       Close
    //                     </Button>
    //                     <Button variant="primary" onClick={handleClose}>
    //                       Save Changes
    //                     </Button>
    //                   </Modal.Footer>
    //                 </Modal>
    //               </div>
    //               <div>
    //                 <Accordion>
    //                   <Accordion.Item eventKey="0">
    //                     <Accordion.Header>Reviews</Accordion.Header>
    //                     <Accordion.Body>
    //                         <h3>{singleDetail.reviews[0].name}</h3>
    //                         <p>{singleDetail.reviews[0].date}</p>
    //                         <p>{singleDetail.reviews[0].rating}</p>
    //                         <p>{singleDetail.reviews[0].comments}</p>
    //                         <hr />
    //                         <h3>{singleDetail.reviews[1].name}</h3>
    //                         <p>{singleDetail.reviews[1].date}</p>
    //                         <p>{singleDetail.reviews[1].rating}</p>
    //                         <p>{singleDetail.reviews[1].comments}</p>
    //                         <hr />
    //                         <h3>{singleDetail.reviews[2].name}</h3>
    //                         <p>{singleDetail.reviews[2].date}</p>
    //                         <p>{singleDetail.reviews[2].rating}</p>
    //                         <p>{singleDetail.reviews[2].comments}</p>


    //                     </Accordion.Body>
    //                   </Accordion.Item>
    //                 </Accordion>
    //               </div>
    //             </div>

    //           </div>
    //         </div>
    //       </section>

    //       : <h1>No Contact Found</h1>
    //   }


    // </div>

  )
}

export default SingleView
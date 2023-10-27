import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function TableC() {

    return (

        <div>

            <section className='text-center'>

            <div className='text-start ms-5 mt-2 mb-2'>

                <h3 className='ms-5'> List of Employees </h3> 

            </div>

                <MDBTable responsive className='container mt-4 t d' style={{marginBottom : '150px'}}>             

                        <MDBTableHead className=''>

                            <tr className=''>

                                <th scope='col' > No </th>
                                <th scope='col' > FullName </th>
                                <th scope='col' > Mobile </th>
                                <th scope='col' > Status </th>
                                <th scope='col' > Profile </th>
                                <th scope='col' > Actions </th>

                            </tr>

                        </MDBTableHead>

                        <MDBTableBody>

                            <tr className=''>

                                <td>

                                    <div className='ms-3'>

                                        <th scope='col'> 1 </th>

                                    </div>

                                </td>

                                <td>

                                    <div className='ms-3 border-0'>

                                        <p className='fw-bold mb-1'>John Doe</p>
                                        <p className='text-muted mb-0'>john.doe@gmail.com</p>

                                    </div>

                                </td>

                                <td>

                                    <p className='fw-normal mb-1'> 1234567890 </p>

                                </td>

                                <td> 

                                    

                                    <button color='link' className='bt2' size='sm' id='d'> Active </button>

                                </td>

                                <td> 

                                    <div className='align-items-center text-center'>

                                        <img src='https://mdbootstrap.com/img/new/avatars/8.jpg' alt=''  style={{ width: '45px', height: '45px' }} className='rounded-circle p' />

                                    </div>

                                </td>

                                <td>

                                    <div className="btn-group">

                                        <button type="button" className="Dro dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-list-ul fa-bounce" style={{color:' #00ffe1'}} ></i>
                                        </button>

                                        <ul className="dropdown-menu bg-secon">
                                            <li className='container' > <a className="dropdown-item rounded-5 w-100 dd mt-1" href="/view/1"> View <i className="fa-regular fa-eye fa-spin ms-1" style={{color: "#4edfdf"}}> </i> </a></li>
                                            <li className='container'> <a className="dropdown-item rounded-5 w-100 dd mt-3" href="/edit/1"> Edit <i className="fa-solid fa-pen-fancy fa-shake ms-1" style={{color: "#4edfdf"}}> </i> </a></li>
                                            <li className='container '> <a className="dropdown-item rounded-5 w-100 dd mt-3 mb-1" href="#/"> Delete <i className="fa-solid fa-trash fa-shake ms-1" style={{color: "#4edfdf"}}></i> </a></li>
                                        </ul>

                                    </div>

                                </td>

                            </tr>


                            {/* <tr>

                                <td>

                                    <div className='ms-3'>

                                        <th scope='col'> 2 </th>

                                    </div>

                                </td>

                                <td>

                                    <div className='ms-3' >

                                        <p className='fw-bold mb-1'> Alex Ray </p>
                                        <p className='text-muted mb-0'> alex.ray@gmail.com </p>

                                    </div>

                                </td>

                                <td>

                                    <p className='fw-normal mb-1'> 1234567890 </p>

                                </td>

                                <td> 

                                    <button color='link' className='bt2' size='sm' id='d'> Edit </button>

                                </td>

                                <td> 

                                    <div className='align-items-center text-center'>

                                        <img src='https://mdbootstrap.com/img/new/avatars/6.jpg' alt=''  style={{ width: '45px', height: '45px' }} className='rounded-circle p' />

                                    </div>

                                </td>

                                <td>

                                    <div className="btn-group">

                                        <button type="button" className="Dro dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-list-ul fa-bounce" style={{color:' #00ffe1'}} ></i>
                                        </button>

                                        <ul className="dropdown-menu">
                                            <li> <a className="dropdown-item" href="#/">Action</a></li>
                                            <li> <a className="dropdown-item" href="#/">Another action</a></li>
                                            <li> <a className="dropdown-item" href="#/">Something else here</a></li>
                                        </ul>

                                    </div>

                                </td>

                            </tr> */}


                            {/* <tr>

                                <td>

                                    <div className='ms-3'>

                                        <th scope='col'> 3 </th>

                                    </div>

                                </td>

                                <td>

                                    <div className='ms-3'>

                                        <p className='fw-bold mb-1'> Kate Hunington </p>
                                        <p className='text-muted mb-0'> kate.hunington@gmail.com </p>

                                    </div>

                                </td>

                                <td>

                                    <p className='fw-normal mb-1'> 1234567890 </p>

                                </td>

                                <td> 

                                    

                                    <button color='link' className='bt2' size='sm' id='d'> Edit </button>

                                </td>

                                <td> 

                                    <div className='align-items-center text-center'>

                                        <img src='https://mdbootstrap.com/img/new/avatars/7.jpg' alt=''  style={{ width: '45px', height: '45px' }} className='rounded-circle p' />

                                    </div>

                                </td>

                                <td>

                                    <div className="btn-group">

                                        <button type="button" className="Dro dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-list-ul fa-bounce" style={{color:' #00ffe1'}} ></i>
                                        </button>

                                        <ul className="dropdown-menu">
                                            <li> <a className="dropdown-item" href="#/">Action</a></li>
                                            <li> <a className="dropdown-item" href="#/">Another action</a></li>
                                            <li> <a className="dropdown-item" href="#/">Something else here</a></li>
                                        </ul>

                                    </div>

                                </td>

                            </tr> */}

                        </MDBTableBody>
                        
                </MDBTable>

            </section>

        </div>

    )

}

export default TableC
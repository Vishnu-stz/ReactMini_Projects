import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Add() {

    

    return (

        <section class="login vh-140 text-center mt-5 mb-5">
    
            <div class="container py-2 h-100 ">

                <div class="row t d d-flex py-2 justify-content-center align-items-center h-100">

                    <div class="container col t d col-xl-10 bg-transparent mt-5 mb-5">

                            <div class="container g-0 bg-transparent mt-3 mb-3">

                                <div className=''>
                                    <h3 className=''> Register Employee Details </h3>
                                </div>

                                <div className='me-5 ms-5'>
                                    <div className='me-5 ms-5'>
                                        <hr className='border-5 border-bottom rounded-5 rounded-circle border-white'/>
                                    </div>
                                </div>
                                                              

                                <form className='container'>

                                <img src='https://mdbootstrap.com/img/new/avatars/8.jpg' alt=''  style={{ width: '120px', height: '120px' }} className='rounded-circle fI mb-3 mt-3 p-2' />

                                    <MDBRow className='mb-4'>
                                        <MDBCol>
                                            <input required className='mb-2 mt-2 rf1 text-white d' type='text' id='form2Example1' placeholder='First Name '/>
                                        </MDBCol>
                                        <MDBCol>
                                            <input required className='mb-2 mt-2 rf2 text-white d' type='text' id='form2Example1' placeholder='Last Name '/>
                                        </MDBCol>

                                    </MDBRow>

                                    <MDBRow className='mb-4'>     

                                        <MDBCol>
                                            <input required className='mb-2 mt-2 rf1 text-white d' type='email' id='form2Example1' label='Email' placeholder='First Name '/>
                                        </MDBCol>
                                        <MDBCol>
                                            <input required className='mb-2 mt-2 rf2 text-white d' type='tel' id='form2Example1' label='Phone' placeholder='Mobile Number '/>                                                
                                        </MDBCol>

                                    </MDBRow>                  

                                    <MDBRow className='mb-4'>
                                        <MDBCol>
                                            <label className="form-label mt-1"> Add File  </label>
                                            <input required type="file" className="container form-control mb-2 mt-2 file text-white d" id="customFile" />
                                        </MDBCol>
                                        <MDBCol>
                                            <label className="form-label mt-1"> Employee Location </label>
                                            <input required className='mb-2 mt-2 rf2 text-white d' type='text' id='form2Example1' placeholder='Location '/>
                                        </MDBCol>

                                    </MDBRow>

                                    <MDBRow className='mb-2'>    

                                        <MDBCol>

                                            <div className='container mb-2 mt-2 re ms-5'>

                                                <div class="form-check">
                                                    <input required className="form-check-input ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                    <label className="form-check-label me-4" for="flexRadioDefault1"> Male </label>
                                                </div>
                        
                                                <div class="form-check">
                                                    <input required className="form-check-input ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                                    <label className="form-check-label me-4" for="flexRadioDefault2"> Female </label>
                                                </div>

                                            </div>

                                        </MDBCol>

                                        <br />

                                        <MDBCol>

                                            <div className="btn-group dr mb-2 mt-2">

                                                <select class="form-select" className='Dro2' aria-label="Default select example">
                                                    
                                                    <option value="" className='dropdown-item disabled text-center ep' aria-disabled= "true"> Employee Status </option>
                                                    <option value=""> <li className='container' > <a className="dropdown-item rounded-5 w-100 dd mt-1" href="#/"> Active </a></li> </option>
                                                    <option value=""> <li className='container'> <a className="dropdown-item rounded-5 w-100 dd mt-3" href="#/"> inActive </a> </li> </option>
                                                    <option value=""> etc.. </option>
                                                    
                                                </select>

                                            </div>

                                        </MDBCol>

                                    </MDBRow>

                                    {/* <MDBCheckbox wrapperClass='d-flex justify-content-center mb-4' id='form6Example8' label='Create an account?' defaultChecked /> */}

                                    <MDBBtn outline color="light" floating className='mb-3 i d' href='#!' role='button'>
                                        <i className="fa-solid fa-hourglass-start fa-spin me-1"> </i> Submit
                                    </MDBBtn>

                                </form>

                            </div>


                    </div>

                </div>
                    
            </div>

        </section>

    )

}

export default Add
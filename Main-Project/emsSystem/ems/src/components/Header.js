import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  
    return (

        <>
            <MDBNavbar light bgColor='' style={{backgroundColor:'lightblue'}}>

                <MDBContainer>

                    <MDBNavbarBrand href='#'>

                        <div className='d-flex justify-content-center'>

                            <a href="/" className='d-flex justify-content-center'> <i className="fa-solid fa-users fa-bounce me-2 mt-3 text-danger fs-5" loading="lazy"></i> <h5 className='m-2 h p-2' id='d' style={{color:'black'}}> <b> Employee Desk </b> </h5> </a>
                            
                        </div>
                       
                    </MDBNavbarBrand>

                </MDBContainer>

            </MDBNavbar>
        </>

    )

}

export default Header
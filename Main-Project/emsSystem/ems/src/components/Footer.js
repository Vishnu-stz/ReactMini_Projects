import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  
    return (

        <MDBFooter className='text-center' color='' style={{backgroundColor:'lightblue' , color:'black'}}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1 i d' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 i d' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 i d' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 i d' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 i d' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 i d' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <input className='inp1 ms-3 text-white d' type='text' id='form2Example1' placeholder='Search Employee '/> 
              </MDBCol>

              <MDBCol size="auto">
                <button color='link' className='bt3 mt-2' size='sm'> Subscribe </button>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-secondary'>Links</h5>

              <ul className='list-unstyled mb-0' style={{color:'black'}}>
                <li>
                  <a href='#/'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#/'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#/' >
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#/' >
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-secondary'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#/'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#/' >
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#/' >
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#/' >
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-secondary'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#/'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#/'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#/'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#/'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-secondary'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#/'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#/'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#/'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#/'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright : <a className='text-white' href='#/'> <i class="fa-solid fa-jedi fa-flip text-info"></i> emsDesk.com
        </a>
      </div>
    </MDBFooter>

    )

}

export default Footer
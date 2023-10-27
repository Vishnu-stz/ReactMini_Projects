import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TableC from './TableC';
import SpinnerC from './SpinnerC';



function Home() {

    // State to handle the spain 
        const [showSpin , setSpin] = useState(false)

        useEffect(() => {

            setTimeout(() => {
                setSpin(true)
            } , 2000)

        } , [])

        console.log(showSpin)


    return (

        <div className='' style={{backgroundColor : "#131313"}}>

            <br />

            <div className='row w-100'> 

                <div className='col-md-6 text-center'> 

                    <input className='mb-5 mt-3 inp ms-3 text-white d' type='text' id='form2Example1' placeholder='Search Employee '/>                

                </div>

                <div className='col-md-6 text-center'>
                
                    <Link to = {"/add"}>

                        <button type="button" className='mb-5 mt-3 inp2 p-2 text-dark d'> <i className="fa-solid fa-user-plus fa-shake text-success me-1"></i> Add Employee </button>
                        
                    </Link>

                </div>

            </div>

            {
                showSpin ? <TableC></TableC> : <SpinnerC></SpinnerC>
            }


            {/* <hr className='bg-transparent' /> */}

        </div>

    )
  
}

export default Home
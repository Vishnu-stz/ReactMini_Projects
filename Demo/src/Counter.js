import React, { useState } from 'react'
import NewC from './NewC'


// object of    props = {share1 : data} 
function Counter({share1 , share2}) {

    // Create a State

        //  var ,  func
    var [num , setNum ] = useState(0)


    
    const person = [
        {name : "vish" , age : 23} ,
        {name : "rohit" , age : 22} ,
        {name : "kast" , age : 21}
    ]

    // changeData = (() => {
    //     setNum(1)
    // })

    function changeData1 () {
        setNum(num = num + 1) // ++num
    }
    
    function changeData2 () {
        setNum(0) // ++num
    }

    function changeData3 () {
        setNum(num = num - 1) // ++num
    }

    return (

        <div>

            <div className='border border-5 p-5'>

                <div className='border border-5 p-2 m-3 rounded-5 bg-secondary'>

                    <div className='border border-5 p-5 m-5 rounded-5 bg-secondary'>

                        <div className='border border-5 p-5 m-5 bg-secondary rounded-2'>

                            <nav> <h1 className='text-center text-'> Counter app </h1> </nav>
                            
                            <h1 className='text-center'> {num} </h1>

                                <h2> {share1} {share2} </h2>

                                <div className='text-center'>

                                    <button onClick = {changeData1} type='button' className='me-2 btn btn-outline-info border-3 rounded-5 bg-transparent'>
                                        Increment 
                                    </button>


                                    <button onClick = {changeData2} type='button' className='btn btn-outline-warning border-3 rounded-5 bg-transparent'>
                                        Reset 
                                    </button>
                                    
                                    
                                    <button onClick = {changeData3} type='button' className='ms-2 btn btn-outline-info border-3 rounded-5 bg-transparent'>
                                        Decrement
                                    </button>

                                    <NewC data = {person} />

                                </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        
    )

}

export default Counter
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './CounterSlice';


function Counter() {

    // access data from store
    const counter = useSelector((state) => state.CounterReducer.value)
    
    // create an onject to dispatch actions
    const dispatch = useDispatch()


    return (

		<div>
		
            <h1> Counter </h1>

            <div className='container w-25 p-5 bg-light text-center mt-5 border'>

                <h1 className='mt-5'> {counter} </h1>

                    <button onClick = {() => dispatch(increment())} className='btn btn-success ms-3 mt-3 '> Increment </button>
                    <button onClick = {() => dispatch(decrement())} className='btn btn-info ms-3 mt-3 '> Decrement </button>
                    <button onClick = {() => dispatch(reset())} className='btn btn-warning ms-3 mt-3 '> Reset </button>

            </div>

		</div>
		
	);

}

export default Counter
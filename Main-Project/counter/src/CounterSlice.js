import { createSlice } from "@reduxjs/toolkit"


// Define State 
const initialState = {
    value : 0
}


// Slice
export const CounterSlice = createSlice({

    // slice name , state , reducers
    name : 'counter' ,
    initialState , 

    reducers : {

        increment : (state) => {
            state.value += 1
        } , 
            decrement : (state) => {
                state.value -= 1
            } ,
                reset : (state) => {
                    state.value = 0   
                }

    }

})

// export actions
export const {increment , decrement , reset} = CounterSlice.actions

// export actions
export default CounterSlice.reducer
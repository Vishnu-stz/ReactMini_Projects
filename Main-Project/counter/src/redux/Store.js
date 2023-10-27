import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../CounterSlice";


// Create Store

export const store = configureStore ({

    reducer : {

        CounterReducer:CounterSlice

    }

})
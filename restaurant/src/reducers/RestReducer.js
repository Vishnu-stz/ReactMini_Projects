import { FAIL, SUCCESS } from "../constants/RestConstants"


// create reducer function

//                            State          ,        action  
export const restReducer = ( state = {restList : []} , action) => {
    

    switch (action.type) {

        case SUCCESS : 
            return {
                restList : action.payload
            }

        case FAIL : 
            return {
                restList : action.payload
            }    
        
        default :            
            return state

    }


}



import BASE_URL from "./base_url"                                                               // 59 import BASE_URL
import { commonRequest } from "./commonRequest"                                                 // 58 import commonRequest


// register
export const registerApi = async (header , body) => {                                                       // 57 next // 60 async  next // 63 export       then add
    
    return await commonRequest("POST" , `${BASE_URL}/employees/register` , body , header)                   // 61 await next // 62 return

}


// get all emplopees



// add




// edit



// delete
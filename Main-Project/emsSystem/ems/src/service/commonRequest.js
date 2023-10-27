import axios from "axios"                                                                       // 47


// creating  a commom structure for all requests                                                // 44

export const commonRequest = async (method , url , body , header) => {  //  api call            // 45   next    // 55 export    next    // 56 async then... AllApi page.js

    let config = {                                                                              // 46
        
        method  ,                                                                               // 48                        
        url     ,
        Headers : header ? header : "application/json" ,
        data    : body

    }

        return axios(config).then(response => {                                                 // 49

            console.log(response);                                                              // 50
            return response                                                                     // 51

        }).catch(error => {                                                                     // 52
            
            console.log(error)                                                                  // 53
            return error                                                                        // 54
            
        })                                                                        

}


// file type
// body form - type data    -   Headers     Content-Type : multiPart / formData

// no file type data in api
//                          -   Headers     appilication / json
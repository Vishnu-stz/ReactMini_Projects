const mongoose = require('mongoose')  // 11

// creating a schema then calling 
const employeeSchema = new mongoose.Schema({  

    fname : {                                                   // 1 
        type     : String ,
        required : true ,
        trim     : true
    } , 
        lname : {                                               // 2
            type     : String ,
            required : true ,
            trim     : true
        } , 
            email : {                                           // 3
                type     : String ,
                required : true ,
                trim     : true ,
                unique   : true
            } , 
                mobile : {                                      // 4
                    type      : String ,
                    required  : true ,
                    trim      : true ,
                    unique    : true ,
                    minlength : 10 ,
                    maxlenght : 13 
                } , 
                    gender : {                                  // 5
                        type     : String ,
                        required : true
                    } , 
                        status : {                              // 6
                            type     : String ,
                            required : true
                        } , 
                            profile : {                         // 7
                                type     : String ,
                                required : true 
                            } ,
                                location : {                    // 8
                                    type     : String ,
                                    required : true ,
                                    trim     : true ,
                                }

})

// Creating A Model     // 12
const employees = new mongoose.model('employees' , employeeSchema)

module.exports = employees 

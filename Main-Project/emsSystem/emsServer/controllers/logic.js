const employees = require("../models/emsModel")

// All logic                                                                                // 20


// register logic                                                                           // 21
employeeRegister = async (req , res) => {                                                                                      // 41 export next router page 

    const file = req.file.filename                                                                                                          // 31
    const { fname , lname , email , mobile , gender , status , location } = req.body

    if (!fname || !lname || !email || !mobile || !gender || !status || !location) {                                                         // 39    
        res.status(404).json("all inputs are required")                                                                                     // 40
    }

        try {    
            const preEmployee = await employees.findOne({ email })                                                                          // 32

                if (preEmployee) {                                                                                                          // 33
                    res.status(403).json(" employee already Present :) ")
                }
                else {                                                                                                                      // 34
                    // create object for new employee
                    const newEmployee = new employees({ fname , lname , email , mobile , gender , status , profile : file , location })     // 35

                        await newEmployee.save()                                                                                            // 36

                            res.status(200).json(newEmployee)                                                                               // 37

                }
        }
        catch {                                                                                                                             // 38
            res.status(400).json("logic Error")
        }

}


module.exports = {employeeRegister}
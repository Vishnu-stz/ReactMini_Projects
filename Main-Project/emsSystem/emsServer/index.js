// for Connecting env file should be first line                             // 8
require('dotenv').config()
  
// import router                                                            // 18
const router = require('./routes/router')

const express = require('express')                                          // 1
const cors  = require('cors')                                               // 3

// import db Connection File
require('./dataBase/connections')                                           // 10  next // creating Model 

const server = express()                                                     // 2

    server.use(cors())                                                      // 4
    server.use(express.json())                                              // 5
    server.use(router)                                                      // 19

const port = 4000 || process.env.port                                       // 6

    server.listen(port , () => {     // 7 
        console.log(` ________ EMS Server Started @${port} ________ `);      // 7 
    }) 




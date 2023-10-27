
const { employeeRegister } = require('../controllers/logic')
const upload = require('../multerConfig/storageConfig')


// Set a path for each requests                     // 13
const express = require('express')

// Create an Object for Router class in express     // 14
const router = new express.Router()



// Register Emplopyee   -   Post                    // 15
router.post('/employees/register' , upload.single('user_profile') , employeeRegister)           // 42 next Frontemd service folder and base common

// Get All Employees    -   Get                     // 16
router.get('/employees/getEmployees')

// ...






module.exports = router                             // 17
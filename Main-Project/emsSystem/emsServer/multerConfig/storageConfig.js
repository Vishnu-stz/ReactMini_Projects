// import multer
const multer = require('multer')                                                // 22

//set storage
const storage = multer.diskStorage({                                            // 23
    
    destination : (req , file , callback) => {                                  // 24
        callback(null , './uploads')                                            
    } ,
        filename : (req , file , callback) => {                                 // 25
            callback(null , `image-${Date.now()}-${file.originalname}`)
        }

})


// file filtering                                                                                           // 26
const fileFilter =  (req , file , callback) => {
    
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {    // 27
        callback(null , true)
    }
    else {                                                                                                  // 28
        callback(null ,false)
        return callback(new Error('Only accepts png/jpg/jpeg format files'))
    }

}


// upload                                                      // 29
const upload = multer({storage , fileFilter})


module.exports = upload                                        // 30


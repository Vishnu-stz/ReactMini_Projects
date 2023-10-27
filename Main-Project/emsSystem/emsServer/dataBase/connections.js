const mongoose = require('mongoose')            // 9

mongoose.connect(process.env.baseUrl , {

    useNewUrlParser : true ,
    useUnifiedTopology : true   

    }).then(() => {

        console.log("_____ MongoDb Atlas Connected _____");

        }).catch(() => {

            console.log("...... MongoDb Connection Error ......");

            })

            
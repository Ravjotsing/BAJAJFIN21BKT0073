//import modules
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
//import url
let url = require('./url')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
//////////////////////////////////////////////////////////
//import routes
const bfhlroutes = require('./routes/bfhlroutes')
//use routes
app.use("/", bfhlroutes)
//////////////////////////////////////////////////////////
//create port
let port = 8080
//assign port no
app.listen(port, () => {
    console.log('Server listening port no:- ', port)
})


require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');

const migrate = require('./migrate')

const env = process.env.NODE_ENV || 'development'
const config = require('./config/core')[env]

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(cors());

const router = require('./routers/index')

const port = config.port

app.use(router)

migrate(()=> {
    app.listen(port, () =>{
        console.log(`app running on [${env}] environment on port : ${port}`)
    })
})

process.on('exit',code=>{
    console.error(`Exit code : ${code}`)
})
process.on('uncaughtException',err=>{
    console.error(err)
})
process.on('unhandledRejection',err=>{
    console.error(err)
})
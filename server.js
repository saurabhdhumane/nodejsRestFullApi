require('dotenv').config()
const express = require('express')
const dbConnect = require('./config/db')
const helmet = require('helmet')
const errorMiddleware = require('./Middleware/errorMiddleware')
const PersonRouter = require('./Routers/PersonRouter')


const app = express()
const port = process.env.PORT || 8080


// Middleware setup
app.use(helmet())
app.use(express.json())


// Routes Setup
app.get('/', (req, res) => {
    try {
        res.status(200).send(`Hello Welcome To Project`)
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Error Occurs In get router",
            error: error.message
        })
    }
})


// health Check EndPoint
app.get('/helth', (req, res) => {
    res.status(200).send({ success: true, message: 'server is healthy' })
})


// routes
app.use('/person', PersonRouter)

// Middleware Errorhande
app.use(errorMiddleware)

// Function for Start App
const startApp = async () => {
    try {
        await dbConnect()
        app.listen(port, () => {
            console.log(`server is sucessfully runnig on port : ${port}`);
        })
    } catch (error) {
        console.error({
            success: false,
            message: "Error Occurs In Application Start",
            error: error.message
        })
    }

}
startApp()
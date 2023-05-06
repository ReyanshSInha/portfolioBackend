const express = require('express')
const connectDB = require('./db/connect')
require('dotenv').config()
const cors = require('cors')


const App = express()

App.use(cors())

const connectionRequestRouter = require('./views/ConnectionRequests')

App.use(express.json())

App.use('/api/v1/connectionRequests', connectionRequestRouter)

App.get('/', (req, res) => {
    res.send('server running send a post request')
})

const port = process.env.PORT || 4000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)

        App.listen(port, () => {
            console.log("server started on the port " + port)
        })
    }catch(err){
        console.log(err)
    }
}

start()
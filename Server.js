const express = require('express')
const connectdb = require('./Configuration/Config')
const userrouter = require("./Router/Router")
const cors = require("cors")
const app = express()
const port=8000
app.use(express.json())
connectdb()
app.use("/user",userrouter)

app.listen(port,console.log('server is running'))
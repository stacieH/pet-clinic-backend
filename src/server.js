const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.get('/appointments',(req,res)=>{
    const data = require("./data.json")
    res.send(data)
})

app.listen(3200, ()=>console.log('Server started! Check this URL: localhost:3200/appointments'))
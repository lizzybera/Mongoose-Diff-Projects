const express = require("express")
require("./Config/DataBase")

const port = 9756

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    try {

        res.status(200).json({
            message: " no error"
        })
        
    } catch (error) {
        res.status(404).json({
            message: " error"
        })
    }
})

app.listen(port, ()=>{
    console.log("Server is on");
})
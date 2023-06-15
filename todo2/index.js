const express = require("express")
require("./Config/Databse")

const port = 2001

const app = express()

app.use(express.json())

app.get("/", (req, res) =>{
    try {
        
        res.status(200).json({
            message: "reading data", 
        })

    } catch (error) {
        res.status(404).json({
            message: "error"
        })
    }
})

app.listen(port, ()=>{
    console.log("");
    console.log("Server is listening");
})
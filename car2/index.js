const express = require("express")
require("./Config/Database2")

const port = 5239

const app = express()

app.use(express.json())

app.get("/", (rea, res) =>{
    try {
        
        res.status(200).json({
            message: "data cn be read now"
        })

    } catch (error) {
        res.status(404).json({
            message: "an error occured"
        })
    }
})

app.listen(port, ()=>{
    console.log("");
    console.log("Server is up and running");
})
const express = require("express")
require ("./Config/database")

const port = 8759

const app = express()

app.use(express.json())

app.use("/", (req, res)=>{
    try {

        res.status(200).json({
            message: "can Now Read"
        })
        
    } catch (error) {
        res.status(404).json({
            message: "cant Read"
        })
    }
})

app.listen(port, ()=>{
    console.log("");
    console.log("Server is working");
})
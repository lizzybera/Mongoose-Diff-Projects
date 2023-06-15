const express = require ("express")
require("./Config/DataBase")

const port = 7456

const app = express()

app.use(express.json())

app.get("/", (req, res) =>{
    try {

        res.status(200).json({
            message: "Working"
        })

    } catch (error) {
        res.status(404).json({
            message: "Working"
        })
    }
})

app.listen(port ,()=>{
    console.log("");
    console.log("hello");
})
const express = require("express")
require("./Config/Database")

const port = 1689;

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    try {

        res.status(200).json({
            message: "i can see you"
        })
        
    } catch (error) {
        console.log("an error has occures", error);
    }
})


app.listen(port, ()=>{
    console.log("");
    console.log("Hello Server");
})
const mongoose = require("mongoose")

const dbString2 = "mongodb://0.0.0.0/election2"

const DataBase = async (req, res) =>{
    try {
        
        const dbconnect = await mongoose.connect(dbString2)

        console.log("connection is on", dbconnect.connection.host);

    } catch (error) {
        console.log("an error has occured", error);
    }
}

module.exports = DataBase()
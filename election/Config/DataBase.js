const mongoose = require("mongoose")

const dbString = "mongodb://0.0.0.0/election"

const DataBase = async (req, res) =>{
    try {
        
        const dbconnect = await mongoose.connect(dbString)

        console.log("connection is on", dbconnect.connection.host);

    } catch (error) {
        console.log("an error has occured", error);
    }
}

module.exports = DataBase()
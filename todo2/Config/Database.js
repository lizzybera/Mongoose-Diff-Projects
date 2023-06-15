const mongoose = require("mongoose")

const dbUrl2 = "mongodb://localhost/todo2"

const DataBase = async (req, res) =>{
    try {
        const dbConnection = await mongoose.connect(dbUrl2)
        console.log("connection is on", dbConnection.connection.host);
    } catch (error) {
        console.log("error occured", error);
    }
}

module.exports = DataBase()
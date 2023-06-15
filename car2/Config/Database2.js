const mongoose = require("mongoose")

const dataBasePort = "mongodb://localhost/carWorld2"

const DataBase = async (req, res) =>{
    try {

        const dbConnect = await mongoose.connect(dataBasePort)
        console.log(`connection is on ${dbConnect.connection.host}`);
        
    } catch (error) {
        console.log("an error has occured", error);
    }
}

module.exports = DataBase()
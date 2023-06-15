const mongoose = require("mongoose");

const dbPort = "mongodb://0.0.0.0:27017/carWorld";

const DataBase = async (req, res) =>{
    try {

        const db =await  mongoose.connect(dbPort);
        console.log(`connection is on ${db.connection.host}`)
        
    } catch (error) {
        console.log("an error as occured ", error)
    }
}

module.exports = DataBase()

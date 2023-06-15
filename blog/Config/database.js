const mongoose = require("mongoose")

const dbUrl = "mongodb://localhost/myBlog"

const DataBase = async (req, res) =>{
    try {
        
        const dbConnection = await mongoose.connect(dbUrl)

        console.log(`connection is on ${dbConnection.connection.host}`);

    } catch (error) {
        console.log("an error has occured", error);
    }
}

module.exports = DataBase()
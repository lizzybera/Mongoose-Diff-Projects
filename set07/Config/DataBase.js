const mongoose = require("mongoose")

const url = "mongodb://localhost/set07"

const DataBase = async (req, res) =>{
    try {
        
        const db = await mongoose.connect(url);
        console.log(db.connection.host);

    } catch (error) {
        console.log("an error has ocured", error);
    }
}

module.exports = DataBase()
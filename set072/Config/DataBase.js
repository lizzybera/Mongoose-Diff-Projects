const mongoose = require("mongoose")

const url2 = "mongodb://localhost/set072"

const DataBase = async (req, res) =>{
    try {
        
        const db = await mongoose.connect(url2);
        console.log(db.connection.host);

    } catch (error) {
        console.log("an error has ocured", error);
    }
}

module.exports = DataBase()
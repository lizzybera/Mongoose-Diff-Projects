const mongoose = require("mongoose")

const CarShcema = mongoose.Schema({
    brand : {
        type : String
    },
    color : {
        type : String
    },
    modelNo : {
        type : String
    },
    yearMake : {
        type : Number
    }
})

const CarModel = mongoose.Model("carInfo", CarShcema)

module.exports = CarModel
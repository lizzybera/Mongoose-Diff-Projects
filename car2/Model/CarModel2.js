const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
    brand : {
        type : String
    },
    color : {
        type : String
    },
    yearMake : {
        type : number
    },
    modelNo : {
        type : String
    },
})

const carModel = mongoose.model("cars", carSchema)

module.exports = carModel
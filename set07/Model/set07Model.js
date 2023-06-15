const mongoose = require("mongoose")

const set07Schema = ({
    name : {
        type : String
    },
    age : {
        type : Number
    },
    email : {
        type : String
    },
    phoneNumber : {
        type : String
    },
    DOB : {
        type : String
    },
})

const set07Model = mongoose.model("students", set07Schema)

module.exports = set07Model
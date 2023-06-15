const mongoose = require("mongoose")

const contestantSchema = mongoose.Schema({
    name : {
        type : String
    },
    state : {
        type : String
    },
    DoB : {
        type : String
    },
    gender : {
        type : String
    },
    certificate : {
        type : String
    },
    
})

const electionModel = mongoose.model("govtElection", contestantSchema)

module.exports = electionModel
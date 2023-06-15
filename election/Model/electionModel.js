const mongoose = require("mongoose")

const contestantSchema = mongoose.Schema({
    
})

const electionModel = mongoose.model("govtElection", contestantSchema)

module.exports = electionModel
const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    TaskName : {
        type : String
    }
})

const todoModel = mongoose.model("Task", todoSchema)

module.export = todoModel
const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    FoodName : {
        type : String
    },
    FoodTown : {
        type : String
    },
    Utencils : {
        type : String
    },
    ingredents : {
        type : String
    },
    NutritionalVAlue : {
        type : String
    },


})

const blogModel = mongoose.model("myBlog", blogSchema)

module.exports = blogModel
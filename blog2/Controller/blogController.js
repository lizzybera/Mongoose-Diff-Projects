const express = express();
const blogModel = require("../Model/BlogModel");

const readBlog = async (req, res) => {
  try {
    const BlogData = await blogModel.find();

    res.status(200).json({
      message: "can Now Read Blog",
      data: BlogData,
    });
  } catch (error) {
    res.status(404).json({
      message: "cant Read Blog",
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const {foodName, FoodTown, Utencils, ingredents, NutritionalVAlue} = req.body;
    
    const createBlogData = await blogModel.create({foodName, FoodTown, Utencils, ingredents, NutritionalVAlue});

    res.status(201).json({
      message: "can Now Read Blog",
      data: createBlogData,
    });
  } catch (error) {
    res.status(404).json({
      message: "cant Read Blog",
    });
  }
};

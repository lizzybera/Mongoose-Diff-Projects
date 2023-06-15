const express = require("express")
const todoModel = require("../Model/todoModel")

const readTodo = async (req, res) =>{
    try {
        
        const todo = await todoModel.find()

        res.status(200).json({
            message: "reading todo",
            data: todo 
        })

    } catch (error) {
        res.status(404).json({
            message: "error", error
        })
    }
}
const createTodo = async (req, res) =>{
    try {
        
       const {} = req.body

       const TodoData = await todoModel.create({})

        res.status(201).json({
            message: "reading data",
            data: TodoData 
        })

    } catch (error) {
        res.status(404).json({
            message: "error", error
        })
    }
}
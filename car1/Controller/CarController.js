const express = require("express")
const CarModel = require("../Model/CarModel")

const getCarInfo = async (req, res) =>{
    try {
        const getCar = await CarModel.find()
        
        res.status(200).json({
            message: "Car Info gotten",
            data: getCar

        })

    } catch (error) {
        res.status(404).json({
            message: "Car Info Not Found"
        })
    }
}

const CreateCarInfo = async (req, res) =>{
    try {
        const {brand, color, modelNo, yearMake} = req.body
        
        const createCar = await CarModel.create({brand, color, modelNo, yearMake})
        
        res.status(201).json({
            message: "Car Info created",
            data: createCar

        })

    } catch (error) {
        res.status(404).json({
            message: "Car Info Not created"
        })
    }
}
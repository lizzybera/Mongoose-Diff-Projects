const express = require("express")
const carModel = require("../Model/CarModel2")

const getCarInfo = async (req, res)=>{
    try {

        const carData = await carModel.find()

        res.status(200).json({
            message: "car gotten" ,
            data: carData
         })
        
    } catch (error) {
        res.status(404).json({
           message: "car not gotten" 
        })
    }
}

const createCarInfo = async (req, res)=>{
    try {

        const {brand,color,yearMake, modelNo} = req.body

        const createCarData = await carModel.create({brand,color,yearMake, modelNo})

        res.status(201).json({
            message: "car gotten" ,
            data: createCarData
         })
        
    } catch (error) {
        res.status(404).json({
           message: "car not gotten" 
        })
    }
}
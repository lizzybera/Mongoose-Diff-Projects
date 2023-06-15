const express = require("express")
const set07Model = require("../Model/set07Model")

const readSet07 = async(req, res) =>{
    try {
        
        const data = set07Model.find()
        
        res.staus(200).json({
            message: "set07 data read",
            data: data
        })


    } catch (error) {
        res.staus(404).json({
            message: "set07 data not read",
        })
    }
}

const createSet07 = async(req, res) =>{
    try {
        const {name, email, phoneNumber, DOB, age} = req.body

        const data = set07Model.create({name, email, phoneNumber, DOB, age})

        res.staus(201).json({
            message: "set07 data created",
            data: data
        })


    } catch (error) {
        res.staus(404).json({
            message: "set07 data not created",
        })
    }
}
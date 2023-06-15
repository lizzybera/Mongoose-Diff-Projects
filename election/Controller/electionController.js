const express = express()
const electionModel = require("../Model/electionModel")

const getContestants = async (req, res) =>{
    try {
        
        const contestants = electionModel.find()

        res.status(200).json({
            message: "contestants no created",
            data: contestants
        })

    } catch (error) {
        res.status(404).json({
            message: "contestants no created"
        })
    }
}

const createContestants = async (req, res) =>{
    try {
        
        const {} = req.body

        const contestantsData = electionModel.create({})

        res.status(201).json({
            message: "contestants no created",
            data: contestantsData
        })

    } catch (error) {
        res.status(404).json({
            message: "contestants no created"
        })
    }
}
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Student = require("../Models/Student")


mongoose.connect('mongodb://localhost/students')
    .then(() => {
        {
            console.log("connected to remote db")
        }
    }
    )
    .catch((err) => {
        {
            console.log(err)
        }
    }
    )

//http://localhost:8080/students/add

router.post("/add", async (req, res) => {
    try {
        Student.create(req.body)
        res.status(200).json({ message: "success" })
    } catch (e) {
        res.status(500).json({ message: "failed" })
    }
})

router.get("/all",async(req,res)=>
{
    try{
    let data = await Student.find()
    res.send(data)
    }catch(e)
    {
        res.status(500).json({message:"failed"})
    }
})
router.delete('/delete/:rollnumber',async(req,res)=>
{
    let roll=req.params.rollnumber
    try{
        let dbresp= await Student.findOneAndDelete(roll)
        res.status(200).json({message:`deleted ${roll}Successfully`})
    }catch(e)
    {
        res.status(500).json({message:"Error while Deleting"})
    }
})

module.exports = router
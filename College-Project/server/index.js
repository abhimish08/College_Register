const express=require('express')
const bodyParser =require("body-parser")
const cors=require('cors')
const student =require("./Routes/Students")


const app=express()

app.use(bodyParser.json())
app.use(cors())

app.use("/students",student)

const PORT=8080
app.listen(PORT ,()=>
{
    console.log(`App is listening at ${PORT}`)
})

// const students=[]            //students data
// const professors=[]          //professors data


// app.get("/",(req,res)=>
// {
//     console.log('Browser Request')
//     res.send({message:"Message from server"})
// })

// app.get("/allstudents",(req,res)=>
// {
//     res.send(students)
// })

// app.get("/allprofessors",(req,res)=>
// {
//     res.send(professors)
// })

// app.post("/addstudent",(req,res)=>
// {
//     console.log(req.body)
//     students.push(req.body)
//     res.send({status:"success",data:req.body})
// })





// app.post("/somedata",(req,res)=>
// {
//     console.log(req.body)
//     res.send({status:"success",message:"data received"})
// })





// app.post("/addprofessor",(req,res)=>
// {
//     professors.push(req.body)
//     res.send({status:"success",data:req.body})
// })
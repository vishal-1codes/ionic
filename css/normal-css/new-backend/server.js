//here we get all install packages
const express=require("express")
const morgan=require("morgan")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

//here we connected database
mongoose.connect("mongodb+srv://m001-student:m001122@cluster0.34cov.mongodb.net/new-backend?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})

//Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB.
const db=mongoose.connection

//if mongodb connection get error
db.on('error',(err)=>{
    console.log(err);
})

//mongodb connection get success message
db.once('opne',()=>{
    console.log("connection successful....");
})

//here we use express with app variable
const app=express()
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//here we defiend port
const PORT=process.env.PORT || 3000

//connection message also we change package.json file for start server.js file
app.listen(PORT,()=>{
    console.log(`database successfully connected to port ${PORT}`);
})

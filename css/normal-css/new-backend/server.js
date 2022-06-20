const express=require("express")
const morgan=require("morgan")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

mongoose.connect("mongodb+srv://m001-student:m001122@cluster0.34cov.mongodb.net/new-backend?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection

db.on('error',(err)=>{
    console.log(err);
})

db.once('opne',()=>{
    console.log("connection successful....");
})


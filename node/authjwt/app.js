require("dotenv").config()
require("./config/database").connect();

const express=require("express")
const app=express();
const User=require("./model/user");





app.use(express.json());

module.exports=app;

const route = require('express').Router()
const userController =  require('./user.controller')

route.post("/adduser",(req,res,next) => {
    userController.adduser(req,res,next)
})


route.post("/getuser",(req,res,next) => {
    userController.getusers(req,res,next)
})

route.post("/loginapi",(req,res,next) => {
    userController.otpapi(req,res,next)
})

route.post("/registerapi",(req,res,next) => {
    userController.nonloginotpapi(req,res,next)
})

module.exports = route
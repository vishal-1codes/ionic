const { response } = require('express')
const Student=require('../models/Student')



//store data
const store=(req,res,next)=>{
    let student=new Student({
        sname:req.body.sname,
        semail:req.body.semail,
        sage:req.body.sage
    })
    student.save()
    .then(response=>{
        res.json({
            response,
            message:"An Stundet added store"
        })
    })
    .catch(error=>{
        res.json({
            error,
            message:"An error occured"
        })
    })
}



//find all
const index=(req,res,next)=>{
    Student.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"An error occured in index"
        })
    })
}


//find using id
const show=(req,res,next)=>{
    let studentID=req.body.studentID
    Student.findById(studentID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"An error occured in show"
        })
    })
}


//update by id

const update=(req,res,next)=>{
    let studentID=req.body.studentID

    let updateData={
        sname:req.body.sname,
        semail:req.body.semail,
        sage:req.body.sage
    }

    Student.findByIdAndUpdate(studentID,{$set:updateData})
    .then(()=>{
        res.json({
            message:"update student update"
        })
    })
    .catch(error=>{
        res.json({
            message:"an error occured error"
        })
    })
}



//delete student

const destroy=(req,res,next)=>{
    let studentID=req.body.studentID
    Student.findByIdAndRemove(studentID)
    .then(()=>{
        res.json({
            message:"student remove in destroy"
        })
    })
    .catch(error=>{
        res.json({
            message:"an error occured in destroy"
        })
    })
}


module.exports={
    index,store,show,update,destroy
}


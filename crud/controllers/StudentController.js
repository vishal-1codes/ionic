const { response } = require('express')
const Student=require('../models/Student')



//store data
const store=(req,res,next)=>{
    let student=new Student({
        sname:req.body.sname,
        semail:req.body.semail,
        sage:req.body.sage,
        eage:req.body.eage,
        scolor:req.body.scolor
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

//here we add new query ...only work in space between two world
const findquery=(req,res,next)=>{
    
    // const query={ $text: { $search: req.params.search } };
    // Student.find(query).select({sname:1})
    const query1={semail:{$regex:req.params.search}} 
    const query2={sname:{$regex:req.params.search}} 
    Student.find({"$or":[query1,query2]}).select({sname:1,semail:1})
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"an error occyred in index"
        })
    })
}


//find using id
const show=(req,res,next)=>{
    // let studentID=req.body.studentID
    Student.find({})
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

//use aggegations here
const showall=(req,res,next)=>{
    // Student.aggregate([{"$match":{"sage":20}}])
    // Student.aggregate([{"$match":{"sage":20,"sname":"vishal"}}])
    // here we get unique value when we use $group , note when we use $group we have to use _id 
    // Student.aggregate([{"$group":{_id:{sage:"$sage",eage:"$eage"}}}])
    // if we write more field in $group then we get more combinations , we also change filed name eg - sname = myname check bellow query for that we talk
    // Student.aggregate([{"$group":{_id:{sage:"$sage",eage:"$eage",sname:"$sname"}}}])
    // here we 1st match 20 sage then we only print name of that match data $group only return unique data not repeat any field that can be similar attribute values
    // Student.aggregate([{"$match":{"sage":20}},{"$group":{_id:{sname:"$sname"}}}])
    //if we pass wrong order in pipeline then we get empty array group then match it is wrong approach
    //but if we check group stage output document then we match then we get output
    //1st we match then we group array

    Student.aggregate([{$unwind:"$scolor"},{$group:{_id:"$scolor"}}])
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"An error occured in showall"
        })
    })
}


//my added
const showuser=(req,res,next)=>{
    let findSage=req.params.sage
    let findEage=req.params.eage
    //"sage":{"$gt":20,"$te":25}
    Student.find({"sage":{$gt:req.params.sage,$lt:req.params.eage}})
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
    index,store,show,update,destroy,showuser,findquery,showall
}


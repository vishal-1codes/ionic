const mongoose=require('mongoose')
const Schema=mongoose.Schema

const studentSchema=new Schema({
    sname:{
        type:String
    },
    semail:{
        type:String
    },
    sage:{
        type:Number
    },
    eage:{
        type:Number
    },
    sphone:{
        type:Number
    }
},{timestamps:true})

//here we add search for sname and semail 
// studentSchema.index({sname:'text',semail:'text'})
// studentSchema.index({'$**': 'text'})


//inside function we write collection name that can be store in mongodeb as students 
//then we store schema and collection name in const var 
const Student=mongoose.model('student',studentSchema)

//then we export that var using module.export
module.exports=Student


//then we go to contyrollers file
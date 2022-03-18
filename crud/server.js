const express=require('express')
const morgan=require('morgan')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')


const StudentRoute=require('./routes/student')


mongoose.connect('mongodb+srv://m001-student:m001122@cluster0.34cov.mongodb.net/crudStu?retryWrites=true&w=majority')

const db=mongoose.connection

db.on('error',(err)=>{
    console.log(err);
})

db.once('open',()=>{
    console.log('mongodb connected succesfully');
})


const app=express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Database connected succesfully ${PORT}`);
})


app.use('/api/student',StudentRoute)
app.use('/api/student/show',StudentRoute)
app.use('/api/student/store',StudentRoute)
app.use('/api/student/update',StudentRoute)
app.use('/api/student/delete',StudentRoute)
app.use('/api/student/showuser',StudentRoute)

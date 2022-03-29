const express=require('express')
const morgan=require('morgan')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
//cors for http request
const cors = require('cors')


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

var corsOptions = {
    origin: 'http://localhost:4200/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//use cors
app.use(cors(corsOptions))

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
app.use('/api/student/findquery',StudentRoute)

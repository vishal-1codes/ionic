const express=require('express')
const app=express()

//here we set view engine to ejs
app.set('view-engine','ejs')

app.get("/",(req,res)=>{
    res.render('index.ejs',{name:'vishal'})
})

app.listen(3000)
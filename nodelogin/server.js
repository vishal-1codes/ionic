const express=require('express')
const app=express()

//here we set view engine to ejs
app.set('view-engine','ejs')

app.get("/",(req,res)=>{
    res.render('index.ejs',{name:'vishal'})
})

app.get("/login",(req,res)=>{
    res.render('login.ejs')
})

app.get("/register",(req,res)=>{
    res.render('register.ejs')
})


//register part
//next part
app.post("/register",(req,res)=>{

})

app.listen(3000)
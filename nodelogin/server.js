const express=require('express')
const app=express()

//store all data in local variable
const users=[]


//here we set view engine to ejs
app.set('view-engine','ejs')

//we can access form data into req variable inside our post method
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render('index.ejs',{name:'vishal'})
})

app.get("/login",(req,res)=>{
    res.render('login.ejs')
})

//for login page
app.post("/login",(req,res)=>{

})

app.get("/register",(req,res)=>{
    res.render('register.ejs')
})


//for register page
//next part
app.post("/register",(req,res)=>{
//that name field in input we access here after req.body
})

app.listen(3000)
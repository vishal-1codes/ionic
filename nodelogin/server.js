if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express=require('express')
const app=express()
const bcrypt=require('bcrypt')
const passport=require('passport')
const flash=require('express-flash')
const session=require('express-session')

// const expressLayouts=require('express-ejs-layouts')

//passport athentication
const initializePassport=require('./passport-config')
initializePassport(
    passport,
    email=> users.find(user=>user.email===email),
    id => users.find(user=>user.id===id)
)


//store all data in local variable
const users=[]


//here we set view engine to ejs
app.set('view-engine','ejs')

//ejs error solve
// app.use(expressLayouts)

//we can access form data into req variable inside our post method
app.use(express.urlencoded({extended:false}))

app.use(flash())
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())


app.get("/",(req,res)=>{
    res.render('index.ejs',{name:'vishal'})
})

app.get("/login",(req,res)=>{
    res.render('login.ejs')
})

//for login page
app.post("/login",passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true
}))

app.get("/register",(req,res)=>{
    res.render('register.ejs')
})


//for register page
//next part
app.post("/register",async(req,res)=>{
//that name field in input we access here after req.body
//here we use try and catch asyncronous code
try{
    //create var , password input name field name , value of hash in number
    const hashPassword=await bcrypt.hash(req.body.password,10)
    //push code in users var that we create to store users
    users.push({
        //uniquely identify the value
        id:Date.now().toString(),
        name:req.body.name,
        email:req.body.email,
        //instend of using req.body.pasword we use hashpassword save to store in database
        password:hashPassword
    })
    //if all ok then user redirect to login page
    res.redirect("/login")

}catch{
    //if we get error , so user redirect to register page
    res.redirect("/register")

}
//here we check user is add in array var or not
console.log("here get psot data",users);
})

app.listen(3000)
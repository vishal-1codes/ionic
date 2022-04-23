//here we use local strategy
const LocalStrategy=require('passport-local').Strategy
//here we check user password match with email
const bcrypt=require(bcrypt)

function initialize(passport){
    const authenticateUser=(email,password,done)=>{
        //get from login page
        const user =getUserByEmail(email)
        //here we pass condition
        if(user==null){
            return done(null,false,{message:'No user with that email'})
        }
    }
    passport.use(new LocalStrategy({usernameField:'email'}),authenticateUser)
    passport.serializeUser((user,done)=>{

    })
    //opposite function
    passport.deserializeUser((id,done)=>{
        
    })
}
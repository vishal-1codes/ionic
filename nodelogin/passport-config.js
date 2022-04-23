

//here we use local strategy
const LocalStrategy=require('passport-local').Strategy

function initialize(passport){
    const authenticateUser=(email,password,done)=>{
        //get from login page
        const user =getUserByEmail(email)
    }
    passport.use(new LocalStrategy({usernameField:'email'}),authenticateUser)
    passport.serializeUser((user,done)=>{

    })
    //opposite function
    passport.deserializeUser((id,done)=>{
        
    })
}
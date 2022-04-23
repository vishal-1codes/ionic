//here we use local strategy
const LocalStrategy=require('passport-local').Strategy
//here we check user password match with email
const bcrypt=require(bcrypt)

function initialize(passport,getUserByEmail){
    const authenticateUser=(email,password,done)=>{
        //get from login page
        const user =getUserByEmail(email)
        //here we pass condition
        if(user==null){
            return done(null,false,{message:'No user with that email'})
        }

        //asyncronous code
        try{
            //login , store password compaire
            if(await bcrypt.compare(password,user.password)){
                //if sucessful
                return done(null,user)
            }else{
                //if not sucessful
                return done(null,false,{message:'Password incorrect'})
            }
        }
        catch(e){
            return done(e)
        }
    }
    passport.use(new LocalStrategy({usernameField:'email'}),authenticateUser)
    passport.serializeUser((user,done)=>{

    })
    //opposite function
    passport.deserializeUser((id,done)=>{
        
    })
}


module.exports=initialize
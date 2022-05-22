const users = require("./user.model");
const { nanoid } = require("nanoid");
const { notify } = require("../../app");
const testdrivess = require("../testdrive/testdrive.model");
const superagent_1=require ("superagent");


var dateTime = new Date();


exports.adduser = async function (req, res, next) {
    let genrateId = nanoid(6);

    let nuser = new users({
        // user_id: genrateId,
        mobilenumber:req.body.mobilenumber,
        name:req.body.name,
        logindate:dateTime
    })
    await nuser
    .save()
    .then((d)=>{
        res
        .status(200)
        .send({ success: true, msg: "new user is added", error: null, data: d });
        // console.log("d data",d._id.valueOf());
    })
    .catch((e)=>{
        res.status(200).send({ success: false, msg: null, error: e });
    })
}


exports.getusers=async function (req,res,next){
    //it is model name
    console.log("req====>",req.body)
    await users.find({mobilenumber:req.body.mobilenumber}).select({
        _id: 1,
        rowstatus: 1,
        // user_id: 1,
        mobilenumber: 1,
        name:1,
        logindate:1
    })
    .then((d) => {
        res
          .status(200)
          .send({ success: true, msg: "data found", error: null, data: d });
      })
      .catch((e) => {
        res.status(200).send({ success: false, msg: null, error: e });
      });
}



exports.otpapi=async function (req,res){

 var userdata,testdrive,opt,optone;

    console.log("body :",req.body);
    if(req.body.mobilenumber.length==10){
        await users.findOne({mobilenumber:req.body.mobilenumber}).select({
            _id: 1,
            rowstatus: 1,
            // user_id: 1,
            mobilenumber: 1,
            name:1,
            logindate:1
        })
        .then((d) => {
           console.log("d----->",d);
            userdata=d;
          })
          .catch((e) => {
            res.status(200).send({ success: false, msg: null, error: e });
          });

        
          if(userdata){
            console.log("user present");

            await testdrivess.findOne({mobilenumber:req.body.mobilenumber}).select({
                _id: 1,
                rowstatus: 1,
                // user_id: 1,
                mobilenumber: 1,
                name:1,
                email:1,
                location:1,
                registrationdate:1
            })
            .then((d) => {
               console.log("d----->",d);
                testdrive=d;
              })
              .catch((e) => {
                res.status(200).send({ success: false, msg: null, error: e });
              });
    
          }else{
              console.log("user not present")
          }

          if(userdata && testdrive){
              console.log("login user",testdrive);
          
          otpsend(userdata.mobilenumber)
          .then((result1) => {
            console.log("opt=====>",result1);
                  var senddata={
                 "name":userdata.name,
                 "mobilenumber":userdata.mobilenumber,
                 "otp": result1,
                 "email":testdrive.email,
                 "location":testdrive.location,
                //  "_id_login":userdata._id,
                //  "_id_register":testdrive._id
              }
              if(senddata){
                var date=new Date()
                users.update({_id:userdata._id}, {$set:{logindate:date}}, function(err, result) {
                    if (err){
                        console.log("error in update user collection logindate");
                    }
                        //do something.
                });
                res .status(200).send({ success: true, msg: "otp send", error: null, data: senddata });
                
              }else{
                res .status(200).send({ success: false, msg: "otp not send", error: null, data: '' });
              }
          });
           
         
    

      
           }else{
              console.log("non login user");
              res .status(200).send({ success: false, msg: "non login user", error: null, data: '' });

          }

      //  console.log("notify-->",notify.name,notify.mobilenumber)
         
    }else{
        console.log("invalid mobile no")
    }
   // res.status(200);

}



 function otpsend(phoneno, callback) {
 return new Promise(function (resolve, reject) {
    if (!phoneno) {
        console.log("data not found");
    }
    else {
	console.log("hhhhhhhhhhhh",phoneno);
        if (phoneno == '9876543210') {
		console.log(" i am here my number is 9876543210")
            const OTP = 1111;
          
        } else {
		console.log(" this is existings no")
            const OTP = Math.floor(1000 + Math.random() * 9000);
          
            console.log("OPT",OTP)

            const smsData = {
                mobileNo: phoneno,
                msg: "Use " + OTP + " as your login OTP. Your OTP is confidential.familycare never calls you asking for OTP." + "DealMoney Autodeal "
            };

            const to = "91" + smsData.mobileNo;
            const msg = smsData.msg;
            const url = "http://sms.cell24x7.com:1111/mspProducerM/sendSMS?user=familycare&pwd=Info@2020&sender=FMLYCR&mobile=" + to + "&msg=" + msg + "&mt=0&tempId=1007048267384316187";
            console.log(url);

            superagent_1.get(url)
                .end(function (err, response) {
                    if (err) {
                        console.log("function error", err);
                        reject(err);
                    }
                    else {
                     console.log("opt send",OTP);
                     resolve (OTP);
                   
                    }
        });
    }
        }
    });
};



exports.nonloginotpapi= async function (req,res){
    var adduser,testdrive , testdriveid , getdata;
    console.log("req.body",req.body);
    //mobile,name,email


    if(req.body.mobilenumber.length==10){
        let nuser = new users({
            // user_id: genrateId,
            mobilenumber:req.body.mobilenumber,
            name:req.body.name,
            logindate:dateTime
        })
        await nuser
        .save()
        .then((d)=>{
            adduser=d;
            console.log("adduser",adduser);
            // console.log("d data",d._id.valueOf());
        })
        .catch((e)=>{
           console.log("error=>",e)
        })

        if(adduser){
            let nuser1 = new testdrivess({
                // registration_id: genrateId,
                mobilenumber:req.body.mobilenumber,
                name:req.body.name,
                email:req.body.email,
                location:req.body.location,
                registrationdate:dateTime,
                userid:adduser._id.valueOf()
            })
            await nuser1
            .save()
            .then((d)=>{
               testdrive=d;
               console.log("testdrive",testdrive);
            })
            .catch((e)=>{
               console.log("error=====>",e)
            })
        }

        if(adduser && testdrive){
                
          otpsend(req.body.mobilenumber)
          .then((result1) => {
            console.log("opt=====>",result1);
            testdriveid=testdrive._id.valueOf()
            testdrivess.findOne({_id:testdriveid}).select({
                _id: 1,
                rowstatus: 1,
                // user_id: 1,
                mobilenumber: 1,
                name:1,
                email:1,
                location:1,
                registrationdate:1
            })
            .then((d) => {
               console.log("d----->",d);
               getdata=d;

               if(getdata){
                var senddata={
                    "name":getdata.name,
                    "mobilenumber":getdata.mobilenumber,
                    "otp": result1,
                    "email":getdata.email,
                    "location":getdata.location,
                   //  "_id_login":userdata._id,
                   //  "_id_register":testdrive._id
                 }
                 res .status(200).send({ success: true, msg: "otp send", error: null, data: senddata });
              }else{
                  console.log("data not store");
                  res .status(200).send({ success: false, msg: "otp not send", error: null, data: '' });
              }

              })
              .catch((e) => {
                res.status(200).send({ success: false, msg: null, error: e });
              });
              
          });
            
        }


    }
}

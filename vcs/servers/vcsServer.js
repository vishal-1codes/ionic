//vcs Server

//for import express
var express=require('express'),
app=express(),

//for port
port=process.env.PORT || 3000,

//for import body parse
bodyParser=require('body-parser')

//for pass data in query format
app.use(bodyParser.urlencoded({extended:true}));

//for output in json format
app.use(bodyParser.json());

//for port listen
app.listen(port);

//for console
console.log('vcs server started on: '+port)


//for error
app.use(function(req,res){
    res.status(404).send({url:req.originalUrl + ' not found'})
})

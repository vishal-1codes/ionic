'use strict';

var mongoose=require('mongoose'),
Schema=mongoose.Schema,
Customer=mongoose.model('Customer');

/*Customer function*/

exports.list_all_customers=function(req,res){
    Customer.find({},function(err,customer){
        if(err)
        res.send(err);
        res.json(customer);
    });
};

exports.create_a_customer=function(req,res){
    var new_customer=new Customer(req.body);
    new_customer.save(function(err,customer){
        if(err)
        res.send(err);
        res.json(customer);
    });
}

exports.read_a_customer=function(req,res){
    Customer.findById(req.params.customerId,function(err,customer){
        if(err)
        res.send(err)
        console.log("customer details added:\n" + customer);
        res.json(customer);
    });
};


exports.update_a_customer=function(req,res){
    Customer.findByIdAndUpdate({_id:req.params.customerId},req.body,{new:true},function(err,customer){
        if(err)
        res.send(err);
        res.json(customer);
    });
};


exports.delete_a_customer=function(req,res){
    Customer.remove({_id:req.params.customerId},function(err,customer){
        if(err)
        res.send(err);
        res.json({message:'Customer successfully deleted'})
    });
};


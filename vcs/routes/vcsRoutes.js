'use strict'
module.exports=function(app){
    var vcs=require('../controllers/vcsController');

    //vcs Routes
    /* Customer */
    app.route('/customer')
    .get(vcs.list_all_customers)
    .post(vcs.create_a_customer);


    app.route('/customer/:customerId')
    .get(vcs.read_a_customer)
    .put(vcs.update_a_customer)
    .delete(vcs.delete_a_customer);
}
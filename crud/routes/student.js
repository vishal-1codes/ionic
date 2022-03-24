const express=require('express')
const router=express.Router()

const StudentController=require('../controllers/StudentController')

router.get('/',StudentController.index)
router.get('/showuser/:sage/:eage',StudentController.showuser)
router.get('/findquery/:search',StudentController.findquery)
router.get('/showall',StudentController.showall)

router.post('/show',StudentController.show)
router.post('/store',StudentController.store)
router.post('/update',StudentController.update)
router.post('/delete',StudentController.destroy)


module.exports=router
const express=require('express');
const router=new express.Router;
// const {home,register,login}=require('../controllers/controller');
// const ZodSchema=require('../validators/validator');
// const validate=require('../middleware/middleware');

const contact=require('../controllers/contactController');

router.route("/contact").post(contact);



module.exports=router;
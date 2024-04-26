const express=require('express');
const router=new express.Router;
const {home,register,login}=require('../controllers/controller');
const ZodSchema=require('../validators/validator');
const validate=require('../middleware/middleware');


router.route("/").get(home);
router.route("/register").post(validate(ZodSchema),register);
router.route("/login").post(login);



module.exports=router;
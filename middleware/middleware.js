const validate=(schema)=>async (req,res,next)=>{
    try {
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (error) {
        // console.log(error);
        const extradetails=error.errors[1].message;
        const status=404;
        const message="Fill details properly";
        const err={
            status,message,extradetails
        }
        // res.json({msg:message});
        next(err);
    }
}

module.exports=validate;
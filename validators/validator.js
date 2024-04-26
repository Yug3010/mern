const {z}=require('zod');

const ZodSchema = z.object({
    username: z.string({required_error:"Name is required"}).
    trim().
    min(3,{message:"Name must be at least 3 charas...."})
    .max(255,{message:"Name must not be more than 255 charas....."}),

    phone: z.string({required_error:"Phone is required"}).
    trim().
    min(10,{message:"Phone must be at least 3 charas...."})
    .max(20,{message:"Phone must not be more than 255 charas....."}),

    email: z.string({required_error:"Email is required"}).
    trim().
    min(3,{message:"Email must be at least 3 charas...."})
    .max(255,{message:"Email must not be more than 255 charas....."})
    .email({message:"Invalid email"}),

    password: z.string({required_error:"Password is required"}).
    trim().
    min(7,{message:"Password must be at least 3 charas...."})
    .max(20,{message:"Password must not be more than 255 charas....."})
  });

  module.exports=ZodSchema;


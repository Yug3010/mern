const mongoose=require('mongoose');

const contactSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   message:{
        type:String,
        required:true
   }
})


const contact=new mongoose.model('contact',contactSchema);
module.exports=contact;
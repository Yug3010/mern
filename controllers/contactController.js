const Contact = require('../model/conatctmodel');
const contact = async (req, res) => {
    try {
        const response=await req.body;
        await Contact.create(response);
        return res.json({message:"msg send successfully"})
    } catch (error) {
        res.json({message:"error"});
    }
}

module.exports=contact;
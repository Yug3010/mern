require('dotenv').config();
const User = require('../model/model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken

// Define generateToken function
function generateToken(payload) {
    const secretKey = process.env.JWTSECRETKEY; // Replace with your actual secret key
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
}

const home = async (req, res) => {
    try {
        res.send("welcome to home page");
    } catch (error) {
        console.log(error);
    }
}

// Registration
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.json({ msg: "User with this email already exists" });
        } else {
            const salt = 10;
            const hash_pass = await bcrypt.hash(password, salt);
            await User.create({ username, email, phone, password: hash_pass });
            const token = generateToken({ email: email }); // Generate token here
            // console.log("Generated token:", token);
            return res.json({ msg: "User registered successfully", token: token });
        }
    } catch (error) {
        console.log(error);
        // res.status(500).json({ error: "Internal server error" });
        next(error);
    }
}


const login=async(req,res)=>{
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email: email });

        if (!userExist) {
            return res.json({ msg: "Invalid details" });

        } else {
            const passcomp=await bcrypt.compare(password,userExist.password);
            const token = generateToken({ email: email });
            console.log(token);
            
            if(passcomp)
            {
                res.json({msg:"User logged-in",token:token});
            }
            else {
                return res.json({ msg: "Invalid password" });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { home, register , login };

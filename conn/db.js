const mongoose = require('mongoose');
require('dotenv').config();

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURL);
        console.log('Connected to MongoDB!');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err; // Throw the error to be caught by the caller
    }
};

module.exports = connectdb;

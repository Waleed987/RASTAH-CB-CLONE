const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/rastah');
        console.log('Connected to DB');
    } catch (error) {
        console.log("ERROR CONNECTING TO DB");
    }
}

module.exports = connectDB;
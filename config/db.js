const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Database connected successfully at ${mongoose.connection.host}` .bgGreen.white)
    } catch (error) {
        console.log(`Mongodb Server Issue ${error}`.bgRed.red)
    }
}

module.exports = connectDB;
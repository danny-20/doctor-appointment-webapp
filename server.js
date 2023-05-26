const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoute = require("./routes/userRoutes")

//env config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express()

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/user', userRoute)

//port
const port = process.env.PORT || 8080

//listen
app.listen(port, (req, res) => {
   console.log(`Server running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`.bgCyan.white);
})
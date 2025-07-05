const express= require('express');
const cors = require('cors');
require('./db/config');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

const patinetRouter = require('./routes/patient');
const bookingRouter = require('./routes/booking');

app.use("/patient", patinetRouter);
app.use("/booking", bookingRouter);


app.listen(PORT,()=>{
    console.log("Server is running now on:"+ PORT);
});
const express= require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('./db/config');
const Patient = require('./db/Patient');
const Slots = require('./db/Slot');
const app = express();

const jwtKey = 'Hcl-poc'; 

app.use(express.json());
app.use(cors());


app.post("/booking", async (req, resp)=>{
  let bookings = new Slots(req.body);
  let result = await bookings.save();
  resp.send(result);
})


app.get("/booking",verifyToken, async (req, resp)=>{
  let result = await Slots.find();
  resp.send(result);
})

app.post("/register", async (req, resp)=>{
    let patinet = new Patient(req.body);
    let result = await patinet.save();
    if(result){
        jwt.sign({result}, jwtKey, {expiresIn: "1h"}, (err, token)=>{
            if(err) {
                resp.send({result: "Can not register try after sometime.!!!"})
            } else {
                resp.send({result, auth: token})
            }
        })
    } else {
        resp.send({result: "Error!"})
    }
})

app.post('/login', async (req, resp)=> {
    console.log(req.body);
    let result = await Patient.findOne(req.body);
    console.log(result);
    if(result) {
        jwt.sign({result}, jwtKey, {expiresIn: "1h"}, (err, token)=>{
            if(err) {
                resp.send({result: "Can not register try after sometime.!!!"})
            } else {
                resp.send({result, auth: token})
            }
        })
    } else {
        resp.send({result: "Error!"})
    }
})

function verifyToken(req, resp, next) {
    let token = req.headers['authorization'];
    if(token) {
        jwt.verify(token, jwtKey, (err, succ)=>{
            if(err) {
                resp.status(401).send({result: "Invalida token code."})
            } else {
                next();
            }
        })
    } else {
         resp.status(401).send({result: "Please provide token."})
    }
}

app.listen(2500,()=>{
    console.log("Server is running now");
});
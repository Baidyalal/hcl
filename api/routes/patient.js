const express = require('express');
const router = express.Router();
const Patient = require('../db/Patient');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtKey = process.env.secretkey;


router.post("/register", async (req, resp)=>{
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

router.post('/login', async (req, resp)=> {
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

module.exports = router;

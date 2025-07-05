const express = require('express');
const router = express.Router();
const Slots = require('../db/Slot');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtKey = process.env.secretkey;


router.post("/",verifyToken, async (req, resp)=>{
  let bookings = new Slots(req.body);
  let result = await bookings.save();
  resp.send(result);
})


router.get("/",verifyToken, async (req, resp)=>{
  let result = await Slots.find();
  resp.send(result);
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

module.exports = router;
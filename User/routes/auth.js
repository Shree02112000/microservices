const router = require('express').Router();
const express = require("express");
const fs = require('fs');
const http = require('http');



const Authcontroller =require('../controller/Authcontroller')

const { json } = require('body-parser');
router.post('/register',Authcontroller.register)
router.post('/login',Authcontroller.login)
router.get('/getuser/:id',Authcontroller.getUser)
router.get('/getalluser',Authcontroller.getallUser)

module.exports= router 
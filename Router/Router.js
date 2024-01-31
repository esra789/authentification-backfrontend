const express = require('express');
const { register, login, getcurrent } = require('../Controller/Controller');
const { registervalidation, validation, loginvalidation } = require('../middleware/validation');
const { isauth } = require('../middleware/Isauth');
userrouter=express.Router()
userrouter.post("/register",registervalidation,validation,register)
userrouter.post("/login",loginvalidation,validation,login)
userrouter.get("/getcurrentuser",isauth,getcurrent)
module.exports=userrouter

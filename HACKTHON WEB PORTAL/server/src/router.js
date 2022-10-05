const express = require('express');
const router = express.Router();
const path= require('path');
router.use(express.json())
router.get('/',async(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/Home/index.html'))
})

router.get('/login',async(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/Login/login.html'))
})

router.get('/register',async(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/Register/register.html'))
})
router.get('/complaint',async(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/Complaint/complaint.html'))
})

module.exports = router;
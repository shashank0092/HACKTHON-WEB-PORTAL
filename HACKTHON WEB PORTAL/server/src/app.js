const express=require('express')
const app=express();
const user=require('./model')
require('./conn')
const bcrypt = require('bcryptjs');
const complaintModel=require('./ComplaintModel');
const port=process.env.PORT ||5000;
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.post('/register', async (req, res) => {

    const { name, age, id, email, phoneNumber, dob, password, cpassword } = req.body;

    if (!name || !age || !id || !email || !phoneNumber || !dob || !password || !cpassword) {
        res.send('Please Fill All Deatails')
    }

    try {

        if (password === cpassword) {
            const validateEmail = await user.findOne({ email: email });
            const validateid = await user.findOne({ id: id });
            const validatephoneNumber = await user.findOne({ phoneNumber: phoneNumber })
            if (validateEmail) {
                res.send('Email Is already avlaible').status(422)
            }
            else if (validateid) {
                res.send('ID ALREADY AVLIABLE').status(422)
            }
            else if (validatephoneNumber) {
                res.send('Phone Number Already Avliable').status(422)
            }

            else {
                const newUser = new user({
                    name: name,
                    age: age,
                    id: id,
                    email: email,
                    phoneNumber: phoneNumber,
                    dob: dob,
                    password: password,
                    cpassword: cpassword
                })
                


                const data = await newUser.save()
                
                res.send('Data Stored').status(201)
                
                console.log(data)

            }

        }
        else{
            res.send('Re Enter Password').status(422)
        }
    } catch (error) {
        console.log(error)
        console.log('This is wrong Data')
        res.status(422)
    }

})




app.post('/login',async(req,res)=>{
    try {
       
        const email=req.body.email;
        const password=req.body.password;
        
        if(!email||!password){
            res.send('Fill All Deatils')
        }else{
            const data=await user.findOne({email: email})

            const isMatch=await bcrypt.compare(password,data.password);
            
            if(isMatch){
                
                
                
                res.send(data)
            }
            else{
                res.send("Password Not Matched")
            }
            
        }
        
    } catch (error) {
        console.log(error)
    }
})



app.post('/complaint',async(req,res)=>{
    console.log(req.body);
    const { name, age,email, phoneNumber,complaint} = req.body;

    if (!name || !age || !email || !phoneNumber||!complaint) {
        res.send('Please Fill All Deatails')
    }

    try {
                const newComplaint = new complaintModel({
                    name: name,
                    age: age,
                    email: email,
                    complaint: complaint,
                    phoneNumber: phoneNumber,
                    
                })
             
                


                const data = await newComplaint.save()
                
                res.send('Data Stored').status(201)
                
                console.log(data)

            
        }

        catch (err) {
            console.error(err);
        }  
})


app.use(require('./router'))




app.listen(port,(req,res)=>{
    console.log(`Runnig At ${port}`);
})
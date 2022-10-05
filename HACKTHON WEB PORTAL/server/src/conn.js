
const mongoose=require('mongoose');


const connect=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/PUPORTAL")
        console.log('Connected TO Data Base')
    }
    catch(err){
        console.log(err)
    }
}

connect();


module.exports = connect;
const mongoose = require('mongoose');


const ComplaintSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
    },
    age: {
        type: Number,
        required: true,
    },
  
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },
complaint: {
    type: String,
    required: true
  }
})


const model = new mongoose.model('Complaint', ComplaintSchema);


module.exports = model
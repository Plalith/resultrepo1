const mongoose = require('mongoose');

var users_students = mongoose.model('users_students', {
    id:{
        type:String,
        trim:true
    },
    Name:{
        type:String,
        trim:true
    },
    college:{
        type:String,
        trim:true
    },
    mobile:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
    payment:{
        type:String,
        trim:true
    },
    payment_date:{
        type:Date
    }
}); 

module.exports = users_students
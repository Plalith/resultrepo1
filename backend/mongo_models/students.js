const mongoose = require('mongoose');

var students = mongoose.model('students', {
    college:{
        type:String,
        trim:true
    },
    batch:{
        type:String,
        trim:true
    },
    branch:{
        type:String,
        trim:true
    },
    section:{
        type:String,
        trim:true
    },
    u_desc:{
        type:String,
        trim:true
    },
    students:[{
        _id : false,
        rollno:{
            type:String,
            trim:true
        },
        student_name:{
            type:String,
            trim:true
        },
        father_name:{
            type:String,
            trim:true
        }
    }]
}); 

module.exports = students
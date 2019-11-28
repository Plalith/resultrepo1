const mongoose = require('mongoose');

var result_data = mongoose.model('result_data', {
    college:{
        type:String,
        trime:true
    },
    course: {
       type:String,
       trime:true 
    },
    grade: {
        type:Boolean
    },
    month: {
        type:String,
        trime:true 
     },
    result_year: {
        type:String,
        trime:true 
     },
    rtype: {
        type:String,
        trime:true 
     },
    sem: {
        type:String,
        trime:true 
     },
    year: {
        type:String,
        trime:true 
     },
    semcode:{
        type:String,
        trime:true 
     },
    Description:{
        type:String,
        trime:true 
     },
    data:{
        type:Array
    },
    analysis:{
        type:Boolean
    },
    batch:{
        type:String,
        trime:true
    }
});

module.exports = result_data;
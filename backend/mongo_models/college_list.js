var mongoose = require('mongoose');
 
var college_list = mongoose.model('colleges', {
    Collge_Name:String,
    State: String,
    District: String,
    City: String 
});
module.exports = college_list;
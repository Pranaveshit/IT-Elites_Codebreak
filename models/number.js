const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const lorryNumbers=new Schema({
    number:String,
    chipId:String,
    condition: String,
});
const lorryNum=mongoose.model('lorryNumbers',lorryNumbers);
module.exports=lorryNum;
const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const chipNumbers=new Schema({
    chipId:String,
    smokeleak:Boolean,
    temperature:Number,
    tyre1pressure:Number, 
    tyre2pressure:Number,  
    tyre3pressure:Number, 
    tyre4pressure:Number, 
    tyre5pressure:Number, 
    tyre6pressure:Number, 

});
const lorryNum=mongoose.model('lorryNumbers',lorryNumbers);
module.exports=lorryNum; 

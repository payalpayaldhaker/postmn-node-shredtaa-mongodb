const mongoose = require('mongoose');
const productSchema= mongoose.Schema({
    name:String,
    surname:Number,
    address:String,
    contact:String
});

module.exports= mongoose.model("products",productSchema);
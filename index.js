//const something =reqiure(somelibaay)
const express =require('express');
const  app =express();
const mongoose = require('mongoose');
require('dotenv').config();

//function defination 
  async function myFunction(){ 
    //every function return something
    let username =process.env.USERNAME
    let password =process.env.PASSWORD
    return await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.9dohe.mongodb.net/?retryWrites=true&w=majority`);
 }
//function calling
myFunction().then(()=>{ 
    console.log('conected');

}).catch((error)=>{ 
    console.log('errorr',error)
});


let port = process.env.PORT || 6000
app.listen(port,()=>{ 
console.log( `server on run ${port}`)
})
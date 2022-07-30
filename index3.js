console.log('its working on');

//const something =require('somelibabry)
const express = require('express');
const mongoose =require('mongoose');

const app = express();
require('dotenv').config();


//async function defination
async function myFunc(){ 
    //every function return somethin
   
    return await mongoose.connect(`mongodb+srv://payalDhakad:payalDhakad@cluster0.9dohe.mongodb.net/?retryWrites=true&w=majority`);
}
//function calling
myFunc().then(data=>{
    //lets creat schema
    const blogSchema = {
        name:  String, // String is shorthand for {type: String}
        surname: String,
        address:   String
        }
        const Blog = mongoose.model('Blog', blogSchema);
    //class object
    const Blog2 = new Blog([
                {
                name:'payal',
                surname:'dhakad',
                address:'neemcuh'
                
                },
                {
                name:'anjali',
                surname:'rathore',
                address:'neemcuh'
                
                },
                {
                name:'anjali',
                surname:'mhawar',
                address:'neemcuh'
                
                }
               
    ]);
    
    Blog2.save().then(() => console.log('create freind'))
    .catch(()=>console.log('not created'));
  
console.log('connectes')
})
.catch(error=>console.log('error'))





//listen
let port = process.env.PORT || 7000;
app.listen(port,()=>{ 
    console.log(`serveron run ${port}`);
})
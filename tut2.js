const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
 async function myFunc(){ 
  return await  mongoose.connect(`mongodb+srv://payalDhakad:payalDhakad@cluster0.9dohe.mongodb.net/?retryWrites=true&w=majority`);

}
myFunc().then(()=>{
console.log('sucess')
    app.post("/list/:name/:surname/:address/:contact", async (req, res) => {
        console.log(req.params);
        let data =  mongoose.model('paramsdata',{name:String,surname:String,address:String,contact:Number})
        
        let data2 = await new data(req.params)
        console.log(data2);
        let data3 = await data2.save();
        console.log(data3)
        //res.send(data3);
       // res.send('ok');
        res.json({"full":data3})
            
        
    })
})
.catch(()=>{ 
console.log('error')

})
    








let port = process.env.PORT || 7000
app.listen(port,()=>{ 
    console.log(`server on run ${port}`)
})
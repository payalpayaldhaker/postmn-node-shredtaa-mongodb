const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
 async function myFunc(){ 
  return await  mongoose.connect(`mongodb+srv://payalDhakad:payalDhakad@cluster0.9dohe.mongodb.net/?retryWrites=true&w=majority`);

}
myFunc().then(()=>{
console.log('sucess')
    app.post("/", async (req, res) => {
        console.log(req.body);
        let data =  mongoose.model('product',{name:String,surname:String,address:String,contact:Number})
        
        let data2 = await new data(req.body)
        console.log(data2);
        let data3 = await data2.save();
        console.log(data3)
        //res.send(data3);
        res.json({"data":data3});
    })
})
.catch(()=>{ 
console.log('error')

})
    








let port = process.env.PORT || 7000
app.listen(port,()=>{ 
    console.log(`server on run ${port}`)
})
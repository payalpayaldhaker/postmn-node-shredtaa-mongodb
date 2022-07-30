const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName=''
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(test);
    return db.collection('products');
  
}
module.exports= dbConnect;
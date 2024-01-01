const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017"

const client = new MongoClient(url);

// async function insertDataMany(){
//     try{
//         const database = client.db('myDatabase');
//         const collection = database.collection('products');
//
//         const doc = [{
//             name:'abc',
//             price:100.00,
//             rating: ["a","b","c"]
//                      },{
//             name: 'pqr',
//             code: ['java','python',12]
//                      }
//         ]
//
//
//         const result = await collection.insertMany(doc);
//         console.log(result)
//
//         console.log('Test ok')
//     }finally {
//         await client.close()
//     }
// }
// insertDataMany().catch(console.dir)
// connectionTest().catch(console.dir);

// async function connectionTest(){
//     try{
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     }finally {
//         await client.close()
//     }
// }
// connectionTest().catch(console.dir);
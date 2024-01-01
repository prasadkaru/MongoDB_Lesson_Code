const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017"

const client = new MongoClient(url);

//find all the product - findAllProducts()
// async function findAllProducts(){
//    try{
//        const database = client.db('shopdb');
//        const product = database.collection('products')
//
//        const result = await product.find();
//        await result.forEach(console.dir)
//    } finally {
//        client.close();
//    }
// }
// findAllProducts().catch(console.dir);


//find the first product - findFirstProducts()
// async function findFirstProducts(){
//    try{
//        const database = client.db('shopdb');
//        const product = database.collection('products')
//
//        const result = await product.findOne();
//        console.log(result)
//    } finally {
//        client.close();
//    }
// }
// findFirstProducts().catch(console.dir);


//find all product with name - findByName(name)
// async function findByName(name){
//     try{
//         const database = client.db('shopdb');
//         const product = database.collection('products')
//
//         const query = {name:name}
//
//         const result = await product.find(query);
//         await result.forEach(console.dir)
//     } finally {
//         client.close();
//     }
// }
// findByName("abc").catch(console.dir);


//find all the products with qty-findByQty(qty)
async function findByQty(qty){
    try{
        const database = client.db('shopdb');
        const product = database.collection('products')

        const query = {price:qty}

        const result = await product.find(query);
        await result.forEach(console.dir)
    } finally {
        client.close();
    }
}
findByQty(100).catch(console.dir);

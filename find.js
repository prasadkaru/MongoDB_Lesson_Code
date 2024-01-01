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
// async function findByQty(qty){
//     try{
//         const database = client.db('shopdb');
//         const product = database.collection('products')
//
//         const query = {price:qty}
//
//         const result = await product.find(query);
//         await result.forEach(console.dir)
//     } finally {
//         client.close();
//     }
// }
// findByQty(100).catch(console.dir);


//find all the products that rated user name-findByRateUser(user)
// async function findByRateUser(user){
//     try{
//         const database = client.db('shopdb');
//         const product = database.collection('products')
//
//         const query = {"rating.user":user}
//
//         const result = await product.find(query);
//         await result.forEach(console.dir)
//     } finally {
//         client.close();
//     }
// }
// findByRateUser("usr3").catch(console.dir);

//sort all products by price-sortByPrice()
// async function sortByPrice(name){
//     try{
//         const database = client.db('shopdb');
//         const product = database.collection('products')
//
//         const query = {name:name}
//         const option = {sort:{price:-1}};
//
//         const result = await product.find(query,option);
//         await result.forEach(console.dir)
//     } finally {
//         client.close();
//     }
// }
// sortByPrice("abc").catch(console.dir);

//sort and filter all products by price-filterSortByPrice()
// async function filterSortByPrice(){
//     try{
//         const database = client.db('shopdb');
//         const product = database.collection('products')
//
//         const query = {}
//         const option = {projection:{_id:0,name:1,code:1,price:1},sort:{price:1}}
//         const result = await product.find(query,option);
//         await result.forEach(console.dir)
//     } finally {
//         client.close();
//     }
// }
// filterSortByPrice().catch(console.dir);

//find all products name start with "Laptop"-findAllProductsStartsWithLaptop()
async function findAllProductsStartsWithLaptop(){
    try{
        const database = client.db('shopdb');
        const product = database.collection('products')

        const query = {name:{$regex:"^aB",$options:'i'}}
        const option = {projection:{_id:0,name:1,code:1,price:1}}
        const result = await product.find(query,option);
        await result.forEach(console.dir)
    } finally {
        client.close();
    }
}
findAllProductsStartsWithLaptop().catch(console.dir);
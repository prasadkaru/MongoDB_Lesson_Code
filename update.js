const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017"

const client = new MongoClient(url);


// async function updatePrice() {
//     try {
//         const database = client.db('shopdb');
//         const product = database.collection('products')
//
//         const filter = { code:'001' };
//         //const options = { upsert: true };
//         // Specify the update to set a value for the plot field
//         const updateDoc = {
//             $set: {
//                 price: 120,
//             },
//         };
//         // Update the first document that matches the filter
//         const result = await product.updateOne(filter, updateDoc);
//
//         // Print the number of matching and modified documents
//         console.log(
//             `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
//         );
//     } finally {
//         // Close the connection after the operation completes
//         await client.close();
//     }
// }
// // Run the program and print any thrown errors
// updatePrice().catch(console.dir);


async function replace() {
    try {
        const database = client.db('shopdb');
        const product = database.collection('products')

        const filter = { code:'001' };
        //const options = { upsert: true };
        // Specify the update to set a value for the plot field
        const replaceDoc = {
                price: 150,
                name:'abcd'
        };
        // Update the first document that matches the filter
        const result = await product.replaceOne(filter, replaceDoc);

        // Print the number of matching and modified documents
        console.log(
            `${result.matchedCount} document(s) matched the filter, replace ${result.modifiedCount} document(s)`,
        );
    } finally {
        // Close the connection after the operation completes
        await client.close();
    }
}
// Run the program and print any thrown errors
replace().catch(console.dir);
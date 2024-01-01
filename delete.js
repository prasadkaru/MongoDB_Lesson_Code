const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017"

const client = new MongoClient(url);
// async function deleteFirst() {
//     try {
//         const database = client.db('shopdb');
//         const product = database.collection('products')
//
//         const query = { code:'001' };
//         const result = await product.deleteOne(query);
//         /* Print a message that indicates whether the operation deleted a
//         document */
//         if (result.deletedCount === 1) {
//             console.log("Successfully deleted one document.");
//         } else {
//             console.log("No documents matched the query. Deleted 0 documents.");
//         }
//     } finally {
//         // Close the connection after the operation completes
//         await client.close();
//     }
// }
// // Run the program and print any thrown errors
// deleteFirst().catch(console.dir);

async function deleteAll() {
    try {
        const database = client.db('shopdb');
        const product = database.collection('products')

        const query = { name:"abc" };
        const result = await product.deleteMany(query);
        /* Print a message that indicates whether the operation deleted a
        document */
        // if (result.deletedCount === 1) {
        //     console.log("Successfully deleted one document.");
        // } else {
        //     console.log("No documents matched the query. Deleted 0 documents.");
        // }
        console.log("Delete "+result.deletedCount+" documents");
    } finally {
        // Close the connection after the operation completes
        await client.close();
    }
}
// Run the program and print any thrown errors
deleteAll().catch(console.dir);

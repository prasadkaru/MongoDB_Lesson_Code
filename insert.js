const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017"

const client = new MongoClient(url);

async function insertInventory(){
    try{
        const database = client.db('shopdb');
        const result = await database.collection('inventory').insertMany(
            [{
            name:'abc',
            price:100.00,
            rating: ["a","b","c"]
        },{
            name: 'pqr',
                price:400,
            code: ['java','python',12]
        }
                 ]);

        console.log(result)

        console.log('Test ok1')
    }finally {
        await client.close()
    }
}

async function insertProducts(){
    try{
        const database = client.db('shopdb');
        const collection = database.collection('products');

        const doc = [{
            code: "001",
            name:'abc',
            price:100.00,
            rating: [{user:"usr1",rate:4},{user:"usr3",rate:1}]
                     },{
            code:'002',
            name: 'pqr',
            code: ['java','python',12]
                     }
        ]


        const result = await collection.insertMany(doc);
        console.log(result)

        console.log('Test ok')
    }finally {
        await client.close()
    }
}
insertInventory().catch(console.dir);
insertProducts().catch(console.dir);
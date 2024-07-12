const { Client } = require ('pg');


async function getConnection(){
    const client = new Client({
        host : 'localhost',
        port: 5439,
        user: 'johan',
        password: 'password',
        database: 'my_store'
    
    });
    await client.connect();
    return client;
}

module.exports = getConnection;



const { Client } = require ('pg');


async function getConnection(){
    const client = new Client({
        host : '200.6.25.30',
        port: 5432,
        user: 'postgres',
        password: '@integral2024',
        database: 'integral_prod'
    
    });
    await client.connect();
    return client;
}

module.exports = getConnection;



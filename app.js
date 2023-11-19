const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "university",
    password: "postgres",
    port: 5432,
});

client.connect();

client.query('SELECT * FROM university',(err, result) => {
  if (err) {
    console.error('Error executing query', err.stack);
  } else {
    console.log('Query result:', result.rows);
  }

  client.end(); 
});

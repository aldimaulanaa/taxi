const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'taxi_data',
  password: 'admin',
  port: 5432,
});

module.exports = pool;
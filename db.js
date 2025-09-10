const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "messageboard",
  password: "postgres",
  port: 5432,
});

module.exports = pool;

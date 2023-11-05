const { Pool } = require("pg");

module.exports.pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "test_db",
  password: "root",
  port: 5432,
});

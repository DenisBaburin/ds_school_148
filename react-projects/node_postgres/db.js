const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "C6656AEuuq",
  host: "localhost",
  port: 5432,
});

module.exports = pool;

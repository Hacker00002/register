const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123",
  database: "registers",
});

const fetch = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params ?? null);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    client.release();
  }
};

module.exports = {
  fetch,
};

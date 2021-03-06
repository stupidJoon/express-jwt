const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'express_jwt'
});

module.exports.isIdDuplicated = async (id) => {
  const connection = await pool.getConnection(async conn => conn);
  const [rows, fields] = await connection.query('SELECT * FROM users WHERE id=?', [id])
  connection.release();
  return Boolean(rows.length);
}

module.exports.signIn = async (id, password) => {
  const connection = await pool.getConnection(async conn => conn);
  const [rows, fields] = await connection.query('SELECT * FROM users WHERE id=? AND password=?', [id, password]);
  connection.release();
  return Boolean(rows.length);
}

module.exports.signUp = async (id, password) => {
  const connection = await pool.getConnection(async conn => conn);
  const [rows, fields] = await connection.query('INSERT INTO users(id, password) VALUES (?, ?)', [id, password]);
  connection.release();
  return true;
}

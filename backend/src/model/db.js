const sql = require('mssql');
const configF = require('../../config/db.json');

const config = {
  user: 'hoangmnhe176788',
  password: '123456',
  server: 'localhost',
  database: 'Test1',
  encrypt: false,
};



const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => console.log(err));

module.exports = {
  sql, poolPromise
};
const sql = require('mssql');
const configF = require('../../config/db.json');

const poolPromise = new sql.ConnectionPool(configF)
  .connect()
  .then(pool => {
    console.log('(db.js) Connected to MSSQL');
    return pool;
  })
  .catch(err => console.log(err));

module.exports = {
  sql, poolPromise
};
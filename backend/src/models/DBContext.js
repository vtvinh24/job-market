const sql = require('mssql');
const configF = require('../../config/db.json');

const poolPromise = new sql.ConnectionPool(configF)
  .connect()
  .then(pool => {
    return pool;
  })
  .catch(err => console.log(err));

module.exports = {
  sql, poolPromise
};
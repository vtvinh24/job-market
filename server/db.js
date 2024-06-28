const { Example } = require("./src/models/orms/ExampleModel.js.example");
const { sequelize } = require("./src/models/SQLize");


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    
  try {
  sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  res.send('Hello World!')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Sync one model
// await Example.sync({
//   // If not passing any options: This creates the table if it doesn't exist (and does nothing if it already exists)
//   // force: true,  // This creates the table, dropping it first if it already existed
//   // alter: true,  // This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
// });
console.log("The table for the User model was just (re)created!");

// Sync all models
// await sequelize.sync({ force: true, alter: true });
// console.log("All models were synchronized successfully.");

// Drop one model
// await Example.drop();
// console.log("User table dropped!");

// Drop all model
// await sequelize.drop();
// console.log("All tables dropped!");

// This will run .sync() only if database name ends with '_test'
// sequelize.sync({ force: true, match: /_test$/ });

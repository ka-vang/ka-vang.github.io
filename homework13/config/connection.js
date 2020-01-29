var mysql = require("mysql");
var connection;

// Creates mySQL connection using Sequelize.
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else{
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "burgers_db"
    }) 
}

// Export connection
connection.connect();
module.exports = connection;
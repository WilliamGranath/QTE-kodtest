const mysql = require("mysql2");
const { Comment } = require("../models/comment");
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
});

connection.query(
  "CREATE DATABASE IF NOT EXISTS comments",
  async (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database created");
    }
  }
);

const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'karla301088',
  database : 'posts_blog'
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;


 
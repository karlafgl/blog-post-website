const app = require('./app');

const mysqlConnection = require('./database');

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
const express = require('express');
const cors = require('cors');
const app = express();

//Settings
app.set('port', 3000)

//Middlewares 
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/post', require('./routes/posts'))
// app.get('', (req, res) => res.send('') )

module.exports = app;
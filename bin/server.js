// server setup
const http = require('http');
const app = require('../app')

// .env setup
require('dotenv').config();

// database setup
require('../config/db.config')

//server creation
const server = http.createServer(app);

let PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('server listening in port : ' + PORT)
})